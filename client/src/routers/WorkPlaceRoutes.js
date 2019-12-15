import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { WorkPlace } from "containers";

const WorkPlaceRoutes = () => (
  <>
    <Route exact path="/" component={WorkPlace} />
  </>
);

export default WorkPlaceRoutes;
