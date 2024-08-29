import express from "express";

import validateRequest from "../../helpers/validateZodRequest";

import auth from "../../middlewares/auth";
import { UserProfileController } from "./UserProfile.Controller";
import { userProfileValidations } from "./UserProfile.Validation";

const router = express.Router();

router.put(
  "/profile",
  auth,
  validateRequest(userProfileValidations.UpdateUserProfileValidationSchema),
  UserProfileController.updateProfileInfo
);

export const UserProfileRoutes = router;
