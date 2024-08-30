import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ZodError, ZodIssue } from "zod";
import handleZodError from "../errors/handleZodError";
import { IErrorDetails } from "../interfaces";
import configs from "../configs";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message: string = "Something Went Wrong";
  let errDetails: IErrorDetails | Error = err;
  let statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;

  if (err instanceof ZodError) {
    const simplifiedErr = handleZodError(err);

    //  Set Values
    message = simplifiedErr.message;
    errDetails = simplifiedErr.errDetails;
    statusCode = simplifiedErr.statusCode;
  }

  res.status(statusCode).json({
    message,
    success: false,
    errDetails: errDetails || err,
    stack: configs.node_env === "production" ? null : err.stack,
  });
};

export default globalErrorHandler;
