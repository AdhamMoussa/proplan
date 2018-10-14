import React from "react";
import PropTypes from "prop-types";

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 pro ject-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>{project.content}</p>
      <div className="row">
        <div className="col left">
          <p className="grey-text">3rd september, 2am</p>
        </div>
        <div className="col right">
          <p className="grey-text">By: {project.author}</p>
        </div>
      </div>
    </div>
  </div>
);

ProjectSummary.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string
  }).isRequired
};

export default ProjectSummary;
