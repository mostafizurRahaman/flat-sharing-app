//  Create User ***

import httpStatus from "http-status";
import prisma from "../../db";
import AppError from "../../errors/AppError";
import { IUser } from "./User.interface";

const createUser = async (payload: IUser) => {
  const { password, data } = payload;

  // Check Is User Already Exists ***??

  const isExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });


  if (isExists) {
     throw new AppError(httpStatus.BAD_REQUEST, "User Already Exists With This Email!!!")
  }


  


  


};
