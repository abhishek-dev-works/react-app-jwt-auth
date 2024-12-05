import React from "react";
import { isAuthenticated } from "../services/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {isAuthenticated() ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Login</Link>}
    </nav>
  );
};

export default Navbar;
