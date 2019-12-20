// core
import express from "express";

// Handlers
import * as user from "./";

const route = express.Router();

route.post("/", user.create);
route.post("/validate", user.validate);

const userRoutes = {
  path: "/users/",
  route: route
};

export default userRoutes;
