import React, { useState } from "react";
import { Link } from "react-router-dom";
import Items from "./Items";

function Navbar() {
  const [state, setstate] = useState(false);

  const handleClick = () => {
    if (state) {
      setstate(false);
    } else {
      setstate(true);
    }
  };
  return (
    <div className="nav-container">
      <nav className="container">
        <div className="harmburger" onClick={handleClick}>
          {state ? (
            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          )}
        </div>

        <Link to="/" className="logo">
          <span>The logo</span>
        </Link>
        <Items state={state} />
      </nav>
    </div>
  );
}

export default Navbar;
