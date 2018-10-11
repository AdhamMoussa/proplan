import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import createHistory from "history/createBrowserHistory";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import styles from "./App.module.css";
import { startSetProjects } from "./store/actions/projects";
import WelcomePage from "./components/layout/WelcomePage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

export const history = createHistory();
class App extends Component {
  componentDidMount() {
    const { startSetProjects } = this.props;
    startSetProjects();
  }

  render() {
    return (
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
  }
}

App.propTypes = {
  startSetProjects: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  startSetProjects: () => dispatch(startSetProjects())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
