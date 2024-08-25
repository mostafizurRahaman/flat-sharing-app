import express from "express";
import { UserController } from "./User.controller";
import validateRequest from "../../helpers/validateZodRequest";
import { userValidations } from "./User.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidations.createUserValidationSchema),
  UserController.createUser
);

export const userRoutes = router;
