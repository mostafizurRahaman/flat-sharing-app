import { z } from "zod";
import validateMessages from "../../configs/constant";

const createUserValidationSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: validateMessages.password.required,
      invalid_type_error: validateMessages.password.invalid,
    }),
    data: z.object({
      name: z.string({
        required_error: validateMessages.name.required,
        invalid_type_error: validateMessages.name.invalid,
      }),
      email: z.string({
        required_error: validateMessages.email.required,
        invalid_type_error: validateMessages.email.invalid,
      }),
      bio: z.string({
        required_error: validateMessages.bio.required,
        invalid_type_error: validateMessages.bio.invalid,
      }),
      profession: z.string({
        required_error: validateMessages.profession.required,
        invalid_type_error: validateMessages.profession.invalid,
      }),
      address: z.string({
        required_error: validateMessages.address.required,
        invalid_type_error: validateMessages.address.invalid,
      }),
    }),
  }),
});




export const userValidations = { 
  createUserValidationSchema
}