import { z } from "zod";
import validateMessages from "../../configs/constant";

const createFlatValidationSchema = z.object({
  body: z.object({
    squareFeet: z.number({
      required_error: "Squire Feet Is Required!!",
      invalid_type_error: "Squire Feet Must Be Number!!",
    }),

    totalBedrooms: z
      .number({
        invalid_type_error: validateMessages.totalBedrooms.invalid,
      })
      .default(0),
    totalRooms: z
      .number({
        invalid_type_error: validateMessages.totalRooms.invalid,
      })
      .default(0),
    utilitiesDescription: z.string({
      invalid_type_error: validateMessages.utilitiesDescription.invalid,
      required_error: validateMessages.utilitiesDescription.required,
    }),
    location: z.string({
      invalid_type_error: validateMessages.location.invalid,
      required_error: validateMessages.location.required,
    }),
    description: z.string({
      invalid_type_error: validateMessages.description.invalid,
      required_error: validateMessages.description.required,
    }),
    rent: z
      .number({
        invalid_type_error: validateMessages.rent.invalid,
      })
      .default(0),
    availability: z
      .boolean({
        invalid_type_error: validateMessages.availability.invalid,
      })
      .default(true),
    advanceAmount: z
      .number({
        invalid_type_error: validateMessages.advanceAmount.invalid,
      })
      .default(0),
  }),
});


export const FlatValidations = {
   createFlatValidationSchema
}