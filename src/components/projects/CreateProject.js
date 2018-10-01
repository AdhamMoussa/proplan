import React, { Component } from 'react'

export default class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };
  handleChange = (e, state) => {
    const value = e.target.value;
    this.setState(() => ({
      [state]: value
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title;
    const content = this.state.content;
    console.log(title, content);
    this.setState(() => ({
      title: '',
      content: ''
    }));
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create A Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input value={this.state.title} type="text" name="title" id="title" onChange={(e) => this.handleChange(e, 'title') } />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea className="materialize-textarea" value={this.state.content} type="text" name="content" id="content" onChange={(e) => this.handleChange(e, 'content') } ></textarea>
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Publish</button>
          </div>
        </form>
      </div>
    );
  }
}
