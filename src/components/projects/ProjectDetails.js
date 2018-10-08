import React from "react";
import PropTypes from "prop-types";
import ReactRouterPropTypes from "react-router-prop-types";
import { connect } from "react-redux";
import { startRemoveProject } from "../../store/actions/projects";
import LoadingPage from "../layout/LoadingPage";

const ProjectDetails = ({ match, history, project, startRemoveProject }) => {
  const { id } = match.params;
  const removeProjectHandler = () => {
    startRemoveProject(id);
    history.push("/");
  };
  if (project) {
    const { title, content } = project;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div className="row">
              <div className="col left">
                <div>Posted by Adham Moussa</div>
                <div>2nd September, 2am</div>
              </div>
              <div className="col right">
                <button
                  type="button"
                  onClick={removeProjectHandler}
                  className="btn pink"
                >
                  Remove Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <LoadingPage />;
};

ProjectDetails.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  startRemoveProject: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  project: state.projects.projectsList.find(
    project => project.id === props.match.params.id
  )
});

const mapDispatchToProps = dispatch => ({
  startRemoveProject: id => dispatch(startRemoveProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
