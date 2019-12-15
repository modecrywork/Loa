import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Auth } from "containers";

const AuthRoute = () => <Route exact path="/auth" component={Auth} />;

export default AuthRoute;
