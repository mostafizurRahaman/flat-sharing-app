import { AnyZodObject } from "zod";
import catchAsync from "../helpers/catchAsync";

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    const {data, error} = await schema.safeParseAsync({
      body: req.body,
      cookies: req.cookies,
    });

    //  Cookies && data: 
    if (error) {
      next(error)
    } else {       
      req.body = data?.body;
      req.cookies = data?.cookies;
      next();
    }

  });
};

export default validateRequest;
