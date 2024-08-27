// ** Login User **

import httpStatus from "http-status";
import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";
import { AuthServices } from "./Auth.services";
import configs from "../../configs";

const loginUser = catchAsync(async (req, res) => {
  const { accessToken, refreshToken } = await AuthServices.loginUser(req.body);

  //  Send Cookies As Response **

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: configs.node_env === "production",
    sameSite: false,
    maxAge: 365 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Logged In Successfully!!!",
    data: { token: accessToken },
  });
});

export const AuthController = {
  loginUser,
};
