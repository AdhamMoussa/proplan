import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ startLogout }) => (
  <ul className="right">
    <li>
      <NavLink to="/create">New Project</NavLink>
    </li>
    <li>
      <button className="btn transparent" type="button" onClick={startLogout}>
        Log Out
      </button>
    </li>
    <li>
      <NavLink to="/" className="btn btn-floating pink lighten-1">
        NN
      </NavLink>
    </li>
  </ul>
);

SignedInLinks.propTypes = {
  startLogout: PropTypes.func.isRequired
};

export default SignedInLinks;
