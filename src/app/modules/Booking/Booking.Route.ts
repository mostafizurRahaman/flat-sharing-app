import express from "express";
import validateRequest from "../../helpers/validateZodRequest";
import { bookingValidations } from "./Booking.Validation";
import { BookingController } from "./Booking.Controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/booking-requests",
  auth,
  validateRequest(bookingValidations.createBookingValidationSchema),
  BookingController.createBooking
);



export const BookingRoutes = router;