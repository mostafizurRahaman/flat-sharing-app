import express from "express";
import validateRequest from "../../middlewares/validateZodRequest";
import { bookingValidations } from "./Booking.Validation";
import { BookingController } from "./Booking.Controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/booking-applications",
  auth,
  validateRequest(bookingValidations.createBookingValidationSchema),
  BookingController.createBooking
);

router.get("/booking-requests", auth, BookingController.getBookings);
router.put(
  "/booking-requests/:bookingId",
  auth,
  validateRequest(bookingValidations.updateBookingValidationSchema),
  BookingController.updateBookingStatus
);

export const BookingRoutes = router;
