import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import styles from "./App.module.css";
import { startSetProjects } from "./store/actions/projects";

class App extends Component {
  componentDidMount() {
    const { startSetProjects } = this.props;
    startSetProjects();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <NavBar />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
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
