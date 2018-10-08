import React from "react";
import PropTypes from "prop-types";
import ProjectSummary from "./ProjectSummary";

const ProjectsList = ({ projects }) => (
  <div className="project-list section">
    {projects.length === 0 ? (
      <p>No Projects</p>
    ) : (
      projects.map(project => (
        <ProjectSummary key={project.id} project={project} />
      ))
    )}
  </div>
);

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectsList;
