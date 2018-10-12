import React from "react";
import { Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import styles from "./App.module.css";
import WelcomePage from "./components/layout/WelcomePage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

export const history = createHistory();

const App = () => (
  <Router history={history}>
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <PublicRoute path="/" component={WelcomePage} exact />
        <PublicRoute path="/signin" component={SignIn} />
        <PublicRoute path="/signup" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/projects/:id" component={ProjectDetails} />
        <PrivateRoute path="/create" component={CreateProject} />
      </Switch>
    </div>
  </Router>
);

export default App;
