import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
// Context
import {AuthenticationContext} from "../context/AuthenticationContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthenticationContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;