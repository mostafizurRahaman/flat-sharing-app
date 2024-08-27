import httpStatus from "http-status";
import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";
import { FlatServices } from "./Flat.services";

const createFlat = catchAsync(async (req, res, next) => {
  const result = await FlatServices.createFlat(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Flat added successfully",
    data: result,
  });
});

export const FlatController = {
  createFlat,
};
