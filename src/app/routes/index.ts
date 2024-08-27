import express from "express";

import { userRoutes } from "../modules/User/User.rotues";
import { AuthRoutes } from "../modules/Auth/Auth.route";
import { FlatRoutes } from "../modules/Flat/Flat.route";
const router = express.Router();

const routes = [
  {
    path: "/",
    route: userRoutes,
  },
  {
    path: "/",
    route: AuthRoutes,
  },
  {
    path: "/flats",
    route: FlatRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export const allRoutes = router;
