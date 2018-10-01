import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectsList = () => {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectsList;
