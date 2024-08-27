import { z } from "zod";
import validateMessages from "../../configs/constant";

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: validateMessages.email.required,
      invalid_type_error: validateMessages.email.invalid,
    }),
    password: z.string({
      required_error: validateMessages.password.required,
      invalid_type_error: validateMessages.password.invalid,
    }),
  }),
});



export const AuthValidations = { 
  loginValidationSchema
}