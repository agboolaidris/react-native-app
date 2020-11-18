import React from "react";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="container-fluid jumbotron content">
      <div className="container ">
        <div className="info">
          <h1 className="display-4">
            WELCOME TO <span className="company-name">IRIS RESTURANT</span>
          </h1>
          <p>The best gourmet restaurant available in Cape Town</p>
          <button className="content-btn">
            <Link to="/">Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
