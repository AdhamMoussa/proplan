import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectsList = ({ projects }) => (
  <div className="project-list section">
    {projects.length === 0 ? (
      <p>No Projects</p>
    ) : (
      projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <ProjectSummary project={project} />
        </Link>
      ))
    )}
  </div>
);

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectsList;
