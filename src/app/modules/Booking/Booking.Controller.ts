import { Request } from "express";
import catchAsync from "../../helpers/catchAsync";
import { BookingServices } from "./Booking.Services";
import sendResponse from "../../helpers/sendResponse";
import httpStatus from "http-status";
import pick from "../../helpers/pick";
import { bookingFilterAbleFields } from "./Booking.constant";
import { paginationOptions } from "../../configs/pagination";


const createBooking = catchAsync(async (req: Request & { user?: any }, res) => {
  const userId = req?.user?.id;
  console.log({
    user: req.user,
  });
  const result = await BookingServices.createBooking(req.body, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking requests submitted successfully",
    data: result,
  });
});

const getBookings = catchAsync(async (req: Request & { user?: any }, res) => {
  console.log(req.cookies);
  const id = req.user.id;
  const params = pick(req.query, bookingFilterAbleFields);
  const options = pick(req.query, paginationOptions);

  const result = await BookingServices.getAllFromBookingRequestFromDB(
    params,
    id,
    options
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Booking requests retrieved successfully `,
    meta: result.meta,
    data: result.data,
  });
});

const updateBookingStatus = catchAsync(async (req: Request & { user?: any }, res) => {
   
    const id = req?.params.bookingId;
    const { status } = req.body;

  const result = await BookingServices.updateBookingStatus(id, status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Booking request updated successfully`,
    data:  result
  });

});

export const BookingController = {
  createBooking,
  getBookings,
  updateBookingStatus,
};
