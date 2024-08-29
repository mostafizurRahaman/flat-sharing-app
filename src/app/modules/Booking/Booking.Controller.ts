import { Request } from "express";
import catchAsync from "../../helpers/catchAsync";
import { BookingServices } from "./Booking.Services";
import sendResponse from "../../helpers/sendResponse";
import httpStatus from "http-status";

const createBooking = catchAsync(async (req: Request & { user?: any }, res) => {
  const userId = req?.user?.id;
  console.log({
    user:req.user
 })
  const result = await BookingServices.createBooking(req.body, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking requests submitted successfully",
    data: result,
  });
});

export const BookingController = {
  createBooking,
};
