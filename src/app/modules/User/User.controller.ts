//  Create User **

import httpStatus from "http-status";
import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";
import { UserServices } from "./User.services";
import { Request } from "express";

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Created Successfully!!!",
    data: result,
  });
});


const getMe = catchAsync(async (req : Request & {user?: any}, res) => {

  const {email, id} = req.user; 
  const result = await UserServices.getMe(id, email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile retrieved successfully",
    data: result,
  });
});



export const UserController = {
  createUser,
  getMe,
};
