import React from "react";
import { Link } from "react-router-dom";
import Items from "./Items";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="container">
        <Link to="/" className="logo">
          <span>The logo</span>
        </Link>
        <Items />
      </nav>
    </div>
  );
}

export default Navbar;
