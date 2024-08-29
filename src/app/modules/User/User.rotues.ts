import express from "express";
import { UserController } from "./User.controller";
import validateRequest from "../../helpers/validateZodRequest";
import { userValidations } from "./User.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidations.createUserValidationSchema),
  UserController.createUser
);

router.post(
  "/profile",
  auth,
  UserController.getMe
);

export const userRoutes = router;
