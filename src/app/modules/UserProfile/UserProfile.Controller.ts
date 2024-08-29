import httpStatus from "http-status";
import catchAsync from "../../helpers/catchAsync";
import { UserProfileServices } from "./UserProfile.Services";
import sendResponse from "../../helpers/sendResponse";
import { Request } from "express";

const updateProfileInfo = catchAsync(
  async (req: Request & { user?: any }, res) => {
    const { id } = req.user;
    const result = await UserProfileServices.updateProfileIntoDB(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User profile Updated successfully",
      data: result,
    });
  }
);

export const UserProfileController = {
  updateProfileInfo,
};
