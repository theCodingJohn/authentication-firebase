import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

// routes
import {PublicRoute} from "./routes"

// pages
import { SignIn, SignUp } from "./pages"

//context provider
import {AuthenticationProvider} from "./context/AuthenticationContext"

// Style
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <AuthenticationProvider>
          <PublicRoute exact path="/signin" component={SignIn}></PublicRoute>
          <PublicRoute exact path="/signup" component={SignUp}></PublicRoute>
        </AuthenticationProvider>
      </Switch>
    </Router>
  )
};

export default App;