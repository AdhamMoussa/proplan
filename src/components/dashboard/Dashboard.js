import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectsList from "../projects/ProjectsList";
import LoadingPage from "../layout/LoadingPage";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    if (this.props.projects.isFetching) {
      return <LoadingPage />;
    } else {
      if (this.props.projects.error) {
        return <p>{this.props.projects.error}</p>;
      } else {
        return (
          <div className="dashboard container">
            <div className="row">
              <div className="col s12 m6">
                <ProjectsList projects={this.props.projects.projectsList} />
              </div>
              <div className="col s12 m5 offset-m1">
                <Notifications />
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
