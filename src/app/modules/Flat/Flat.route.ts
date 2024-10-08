import express from "express";
import { FlatController } from "./Flat.controller";
import { FlatValidations } from "./Flat.validation";
import validateRequest from "../../middlewares/validateZodRequest";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  auth,
  validateRequest(FlatValidations.createFlatValidationSchema),
  FlatController.createFlat
);

router.get("/", FlatController.getAllFlats);

router.put(
  "/:id",
  auth,
  validateRequest(FlatValidations.updateFlatValidationSchema),
  FlatController.updateFlatByID
);

export const FlatRoutes = router;
