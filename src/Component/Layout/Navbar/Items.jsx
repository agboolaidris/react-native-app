import React from "react";
import { Link } from "react-router-dom";

function Items() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Order</Link>
      </li>
      <li>
        <Link to="/" className="nav-reserve-btn">
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
