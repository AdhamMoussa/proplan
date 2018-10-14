import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactRouterPropTypes from "react-router-prop-types";
import { connect } from "react-redux";
import { startAddProject } from "../../store/actions/projects";
import styles from "./CreateProject.module.css";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = (e, state) => {
    const { value } = e.target;
    this.setState(() => ({
      [state]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;
    const { startAddProject, history, user } = this.props;
    const author = `${user.firstName} ${user.lastName}`;
    this.setState(() => ({
      title: "",
      content: ""
    }));
    startAddProject({ title, content, author });
    history.push("/");
  };

  render() {
    const { title, content } = this.state;
    return (
      <div className="container">
        <div className={styles.CreateProject}>
          <form onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create A Project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input
                value={title}
                type="text"
                name="title"
                id="title"
                onChange={e => this.handleChange(e, "title")}
              />
            </div>
            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea
                className="materialize-textarea"
                value={content}
                type="text"
                name="content"
                id="content"
                onChange={e => this.handleChange(e, "content")}
              />
            </div>
            <div className="input-field">
              <button type="submit" className="btn pink lighten-1 z-depth-0">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreateProject.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  startAddProject: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  startAddProject: project => dispatch(startAddProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
