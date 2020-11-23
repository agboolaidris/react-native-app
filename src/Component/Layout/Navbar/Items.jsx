import React from "react";
import { Link } from "react-router-dom";

function Items({ state }) {
  return (
    <ul className={state ? "menu active" : "menu"}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/order">Order</Link>
      </li>
      <li>
        <Link to="/" className="nav-reserve">
          Reservations
        </Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/" className="nav-auth-btn">
          Signup
        </Link>
      </li>
    </ul>
  );
}

export default Items;
