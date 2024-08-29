import express from "express";

import { userRoutes } from "../modules/User/User.rotues";
import { AuthRoutes } from "../modules/Auth/Auth.route";
import { FlatRoutes } from "../modules/Flat/Flat.route";
import { BookingRoutes } from "../modules/Booking/Booking.Route";
import { UserProfileRoutes } from "../modules/UserProfile/UserProfile.route";
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
    path: "/",
    route: BookingRoutes,
  },
  {
    path: "/flats",
    route: FlatRoutes,
  },
  {
    path: "/",
    route: UserProfileRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export const allRoutes = router;
