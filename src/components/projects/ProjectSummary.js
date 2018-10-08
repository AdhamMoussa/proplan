import React from "react";
import PropTypes from "prop-types";

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 pro ject-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>{project.content}</p>
      <p className="grey-text">3rd september, 2am</p>
    </div>
  </div>
);

ProjectSummary.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }).isRequired
};

export default ProjectSummary;
