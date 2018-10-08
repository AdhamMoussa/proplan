import React, { Component } from "react";
import styles from "./SignUp.module.css";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
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
    const { firstName, lastName, email, password } = this.state;
    console.log(firstName, lastName, email, password);
    this.setState(() => ({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }));
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div className="container">
        <div className={styles.SignUp}>
          <form onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input
                value={firstName}
                type="text"
                name="firstName"
                id="firstName"
                onChange={e => this.handleChange(e, "firstName")}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                value={lastName}
                type="text"
                name="lastName"
                id="lastName"
                onChange={e => this.handleChange(e, "lastName")}
              />
            </div>
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
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
