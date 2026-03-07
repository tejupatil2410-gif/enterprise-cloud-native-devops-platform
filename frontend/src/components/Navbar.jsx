import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="navbar">

      <div className="nav-container">

        <div className="logo">
          Customer Order Management Platform
        </div>

        <div className="nav-links">

          <Link to="/">Login</Link>

          <Link to="/dashboard">Dashboard</Link>

        </div>

      </div>

    </div>

  );

}

export default Navbar;