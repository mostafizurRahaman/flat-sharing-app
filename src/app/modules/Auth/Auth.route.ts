import express from "express";
import validateRequest from "../../helpers/validateZodRequest";
import { AuthValidations } from "./Auth.validation";
import { AuthController } from "./Auth.controller";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidations.loginValidationSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;
