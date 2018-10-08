import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

const ProjectDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title
            {id}
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            optio! Illum laudantium necessitatibus maxime porro, dolore,
            distinctio, dolores deleniti fugiat quaerat doloribus voluptatibus
            laborum soluta sed nulla eaque ab! At?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Adham Moussa</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default ProjectDetails;
