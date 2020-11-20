import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Content() {
  useEffect(() => {
    Aos.init({ duration: 20000 });
  }, []);
  return (
    <div className="container-fluid jumbotron content">
      <div className="container  ">
        <div className="info">
          <h1 className="display-4" data-aos="flip-up">
            WELCOME TO <span className="company-name">IRIS RESTURANT</span>
          </h1>
          <span className="sub-title" data-aos="zoom-in">
            The best gourmet restaurant available in Cape Town
          </span>
          <button className="content-btn">
            <Link to="/">Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
