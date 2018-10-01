import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <NavBar />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
