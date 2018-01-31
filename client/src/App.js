import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import VREHome from "./pages/VREHome";
import TestPage from "./pages/TestPage";
import Admin from "./pages/Admin";
import {Nav1} from "./components/Nav1";
import {VolSignUp} from "./components/Form/VolSignUp";
import Bootstrap from "react-bootstrap";
import {SignUpForm} from "./components/Form/SignUpForm";
import {LoginForm} from "./components/Form/LoginForm";
import TestAuthentication from "./components/TestAuthentication";
import Auth from "./modules/Auth";

const App = () => (
  <Router>
    <div>
      <Nav1 />
      <Route exact path="/" component={VREHome} />
      <Route exact path="/Admin" component={Admin} />
      <Route exact path="/test" component={TestPage} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/logout" component={VREHome} />
      <Route exact path="/testauth" component={TestAuthentication} />
     
    </div>
  </Router>
);

export default App;