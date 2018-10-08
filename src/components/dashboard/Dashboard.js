import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Notifications from "./Notifications";
import ProjectsList from "../projects/ProjectsList";
import LoadingPage from "../layout/LoadingPage";

const Dashboard = ({ projects }) => {
  if (projects.error) {
    return <p>{projects.error}</p>;
  }
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          {projects.isFetching ? (
            <LoadingPage />
          ) : (
            <ProjectsList projects={projects.projectsList} />
          )}
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  projects: PropTypes.shape({
    projectsList: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
    error: PropTypes.string
  }).isRequired
  // arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(Dashboard);
