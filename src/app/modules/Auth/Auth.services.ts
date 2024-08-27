import { passwordHelpers } from "../../helpers/passwordHelper";
import prisma from "../../db";
import { ILoginPayload } from "./Auth.interface";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import configs from "../../configs";

const loginUser = async (payload: ILoginPayload) => {
  const { email, password } = payload;

  // *  Is User Exists **
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  });

  // ** Check Is password Match With Current Retrieved User

  const isCorrectPassword = await passwordHelpers.comparePassword(
    password,
    user?.password
  );

  if (!isCorrectPassword) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Your Credential Not Matched!!!"
    );
  }

  // * Payload For Token **
  const userPayload = {
    email: user?.email,
    id: user?.id,
  };

  // ** Generate Access Token **
  const accessToken = jwtHelpers.createToken(
    userPayload,
    configs.access_token_secret as string,
    configs.access_token_expires_in as string
  );

  // ** Generate Refresh Token ***
  const refreshToken = jwtHelpers.createToken(
    userPayload,
    configs.refresh_token_secret as string,
    configs.refresh_token_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
  loginUser,
};
