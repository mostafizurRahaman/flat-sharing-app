import express from "express";

import { userRoutes } from "../modules/User/User.rotues";
const router = express.Router();

const routes = [
  {
    path: "/",
    route: userRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));


export const allRoutes = router; 