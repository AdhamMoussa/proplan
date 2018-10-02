import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectsList = props => {
  return (
    <div className="project-list section">
      {props.projects.length === 0 ? (
        <p>No Projects</p>
      ) : (
        props.projects.map((project, i) => (
          <ProjectSummary key={i} project={project} />
        ))
      )}
    </div>
  );
};

export default ProjectsList;
