import express from "express";
import { FlatController } from "./Flat.controller";
import { FlatValidations } from "./Flat.validation";
import validateRequest from "../../helpers/validateZodRequest";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  auth,
  validateRequest(FlatValidations.createFlatValidationSchema),
  FlatController.createFlat
);


router.get('/',FlatController.getAllFlats)

export const FlatRoutes = router; 