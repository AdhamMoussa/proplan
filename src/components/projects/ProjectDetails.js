import React from 'react';


const ProjectDetails = (props) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {props.match.params.id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, optio! Illum laudantium necessitatibus maxime porro, dolore, distinctio, dolores deleniti fugiat quaerat doloribus voluptatibus laborum soluta sed nulla eaque ab! At?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Adham Moussa</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
