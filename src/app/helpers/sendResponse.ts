import { Response } from "express";

interface IMeta {
  limit: number;
  page: number;
  totalPages: number;
  total: number;
}

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: IMeta;
  data?: T | null;
}

const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    statusCode:data?.statusCode,
    message: data?.message,
    meta: data?.meta,
    data: data?.data,
  });
};

export default sendResponse;
