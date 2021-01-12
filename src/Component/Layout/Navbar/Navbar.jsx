import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Items from "./Items";

function Navbar() {
  useEffect(() => {
    Aos.init({ duration: 20000 });
  }, []);

  const [state, setstate] = useState(false);

  const handleClick = () => {
    if (state) {
      setstate(false);
    } else {
      setstate(true);
    }
  };
  return (
    <div className="nav-container" data-aos="zoom-in">
      <nav className="container">
        <div className="harmburger" onClick={handleClick}>
          {state ? (
            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          )}
        </div>

        <Link to="/">cartItems</Link>
        <Link to="/" className="logo">
          <span>The logo</span>
        </Link>
        <Items state={state} />
      </nav>
    </div>
  );
}

export default Navbar;
