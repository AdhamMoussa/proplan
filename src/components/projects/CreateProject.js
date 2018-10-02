import React, { Component } from "react";
import styles from "./CreateProject.module.css";
import { connect } from "react-redux";
import { startAddProject } from "../../store/actions/projects";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = (e, state) => {
    const value = e.target.value;
    this.setState(() => ({
      [state]: value
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const title = this.state.title;
    const content = this.state.content;
    this.setState(() => ({
      title: "",
      content: ""
    }));
    this.props.startAddProject({ title, content });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="container">
        <div className={styles.CreateProject}>
          <form onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create A Project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input
                value={this.state.title}
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
                value={this.state.content}
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

const mapDispatchToProps = dispatch => {
  return {
    startAddProject: project => dispatch(startAddProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
