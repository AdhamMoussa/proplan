import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startLogout } from "../../store/actions/auth";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = ({ auth, startLogout }) => (
  <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to="/" className="brand-logo">
        ProPlan
      </Link>
      {auth.authenticated ? (
        <SignedInLinks startLogout={startLogout} />
      ) : (
        <SignedOutLinks />
      )}
    </div>
  </nav>
);

NavBar.propTypes = {
  auth: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  }).isRequired,
  startLogout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
