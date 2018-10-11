import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(PublicRoute);
