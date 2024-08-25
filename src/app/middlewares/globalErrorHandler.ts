import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || "Somethings Went Wrong!!!";

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message,
    success: false,
    err,
    stack: err.stack,
  });
};

export default globalErrorHandler;
