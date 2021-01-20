import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
// Context
import {AuthenticationContext} from "../context/AuthenticationContext"

const PublicRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthenticationContext);
	return (
		<Route
			{...rest}
			component={(props) =>
				auth ? <Redirect to="/profile" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
