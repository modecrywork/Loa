import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import WorkPlaceRoutes from "./WorkPlaceRoutes";
import AuthRoute from "./AuthRoute";

const AppRouter = () => (
  <Router>
    <WorkPlaceRoutes />
    <AuthRoute />
  </Router>
);

export default AppRouter;
