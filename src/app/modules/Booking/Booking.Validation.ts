import { INVALID, z } from "zod";
import validateMessages from "../../configs/constant";
import { BookStatus } from "@prisma/client";

const createBookingValidationSchema = z.object({
  body: z.object({
    flatId: z.string({
      required_error: validateMessages.flatId.required,
      invalid_type_error: validateMessages.flatId.invalid,
    }),
  }),
});



const updateBookingValidationSchema = z.object({ 
   body: z.object({
      status: z.enum([BookStatus.BOOKED, BookStatus.PENDING, BookStatus.REJECTED])
   }, {
     message: `Invalid Booking Status!!`
   })
})


export const bookingValidations = {
  createBookingValidationSchema,
  updateBookingValidationSchema,
};
