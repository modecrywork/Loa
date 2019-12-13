// core
import express from "express";

// Handlers
import * as cat from "./";

const route = express.Router();

route.get("/", cat.read);

const catRoutes = {
  path: "/cats/",
  route: route
}

export default catRoutes;
