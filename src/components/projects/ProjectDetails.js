import React from "react";
import PropTypes from "prop-types";
import ReactRouterPropTypes from "react-router-prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRemoveProject } from "../../store/actions/projects";
import LoadingPage from "../layout/LoadingPage";

const ProjectDetails = ({
  match,
  history,
  project,
  isFetching,
  projectsFetched,
  startRemoveProject
}) => {
  const { id } = match.params;
  const removeProjectHandler = () => {
    startRemoveProject(id);
    history.push("/");
  };
  if (project) {
    const { title, content, author } = project;
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
                <div>Posted by {author}</div>
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
  if (!isFetching && projectsFetched)
    return (
      <div>
        <p>This project is not available!!!</p>
        <Link to="/">Return to Dashboard</Link>
      </div>
    );
  return <LoadingPage />;
};

ProjectDetails.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
  startRemoveProject: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  projectsFetched: PropTypes.bool.isRequired
};

ProjectDetails.defaultProps = {
  project: null
};

const mapStateToProps = (state, props) => ({
  project: state.projects.projectsList.find(
    project => project.id === props.match.params.id
  ),
  isFetching: state.projects.isFetching,
  projectsFetched: state.projects.projectsFetched
});

const mapDispatchToProps = dispatch => ({
  startRemoveProject: id => dispatch(startRemoveProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
