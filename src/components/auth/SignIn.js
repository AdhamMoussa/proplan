import React, { Component } from "react";
import styles from "./SignIn.module.css";

export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e, state) => {
    const { value } = e.target;
    this.setState(() => ({
      [state]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    this.setState(() => ({
      email: "",
      password: ""
    }));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div className={styles.SignIn}>
          <form onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="email"
                name="email"
                id="email"
                onChange={e => this.handleChange(e, "email")}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                type="password"
                name="password"
                id="password"
                onChange={e => this.handleChange(e, "password")}
              />
            </div>
            <div className="input-field">
              <button type="submit" className="btn pink lighten-1 z-depth-0">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
