import { INVALID, z } from "zod";
import validateMessages from "../../configs/constant";

const createBookingValidationSchema = z.object({
  body: z.object({
    flatId: z.string({
      required_error: validateMessages.flatId.required,
      invalid_type_error: validateMessages.flatId.invalid,
    }),
  }),
});




export const bookingValidations = {
   createBookingValidationSchema
}
