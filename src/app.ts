import express, { Request, Response } from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app = express();

//  Application Level  Middlewares **
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//  Root App Route ***
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: `Server Is Running Now!!!`,
  });
});

// All  Routes will include here ***

//  Global Errors **
app.use(globalErrorHandler);

//  Not Found Route **
app.use(notFound);

export default app;
