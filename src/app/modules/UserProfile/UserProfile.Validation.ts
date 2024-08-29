import { z } from "zod";
import validateMessages from "../../configs/constant";





const UpdateUserProfileValidationSchema = z.object({
  body: z.object({
    bio: z.string({
      required_error: validateMessages.bio.required,
      invalid_type_error: validateMessages.bio.invalid,
    }).optional(),
    profession: z.string({
      required_error: validateMessages.profession.required,
      invalid_type_error: validateMessages.profession.invalid,
    }).optional(),
    address: z.string({
      required_error: validateMessages.address.required,
      invalid_type_error: validateMessages.address.invalid,
    }).optional(),
  }),
});


export const userProfileValidations = {
  UpdateUserProfileValidationSchema,
};