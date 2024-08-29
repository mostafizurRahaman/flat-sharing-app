
import httpStatus from "http-status";
import prisma from "../../db";
import AppError from "../../errors/AppError";
import { IUser } from "./User.interface";
import { passwordHelpers } from "../../helpers/passwordHelper";
import configs from "../../configs";

//  Create User ***
const createUser = async (payload: IUser) => {
  const { password, data } = payload;
  
  // Check Is User Already Exists ***??

  const isExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (isExists) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User Already Exists With This Email!!!"
    );
  }

  const hashedPassword = await passwordHelpers.encryptPassword(
    password,
    Number(configs.bcrypt_solt_round as string)
  );
  console.log(hashedPassword);
  // Seperate User Data **
  
  const userData = {
    name: data?.name,
    email: data.email,
    password: hashedPassword,
  };

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });

    const userProfile = await tx.userProfile.create({
      data: {
        userId: user.id,
        bio: data?.bio,
        profession: data?.profession,
        address: data?.address,
      },
    });

    return {
      user,
      userProfile,
    };
  });
  return result;
};

//  Get Me ***
const getMe = async (id: string, email: string) => { 

  const userProfile = await prisma.user.findUniqueOrThrow({ 
    where: {
       id
     }
  }).profile()


  return userProfile

}


export const UserServices = {
  createUser,
  getMe
};
