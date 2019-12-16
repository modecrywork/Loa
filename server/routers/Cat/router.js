// core
import express from "express";

// Handlers
import * as cat from "./";

const route = express.Router();

route.get("/", cat.read);
route.post("/", cat.create);
route.put("/:id", cat.update);
route.delete("/:id", cat.remove);

const catRoutes = {
  path: "/cats/",
  route: route
}

export default catRoutes;
