import { NextFunction, Request, RequestHandler, Response } from "express";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import { jwtHelpers } from "../helpers/jwtHelpers";
import configs from "../configs";
import { JwtPayload, Secret } from "jsonwebtoken";
import prisma from "../db";
import catchAsync from "../helpers/catchAsync";

const auth = catchAsync(
  async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    //  Get Token From Header **
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You Are Not Authorized!!!");
    }

    //  Verify Token **
    const decoded = jwtHelpers.verifyToken(
      token,
      configs.access_token_secret as Secret
    ) as JwtPayload;

    const { email, id } = decoded;

    //  Check Is User Exists With This ID ??
    await prisma.user.findUniqueOrThrow({
      where: {
        email,
        id,
      },
    });

    //  Set Decoded Data Into Request **
    req.user = decoded;

    //  Call The Next Function **
    next();
  }
);

export default auth;
