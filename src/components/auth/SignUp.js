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
    const value = e.target.value;
    this.setState(() => ({
      [state]: value
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const password = this.state.password;
    console.log(firstName, lastName, email, password);
    this.setState(() => ({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }));
  };
  render() {
    return (
      <div className="container">
        <div className={styles.SignUp}>
          <form onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input
                value={this.state.firstName}
                type="text"
                name="firstName"
                id="firstName"
                onChange={e => this.handleChange(e, "firstName")}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                value={this.state.lastName}
                type="text"
                name="lastName"
                id="lastName"
                onChange={e => this.handleChange(e, "lastName")}
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                value={this.state.email}
                type="email"
                name="email"
                id="email"
                onChange={e => this.handleChange(e, "email")}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                value={this.state.password}
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
