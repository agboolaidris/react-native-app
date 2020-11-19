import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function MemberInfo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4" data-aos="flip-left">
          <h5>David Adam</h5>
          <span>GRILL CHEF</span>
          <p>
            Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="col-md-4" data-aos="flip-up">
          <h5>Bamidele Johnson</h5>
          <span>EXECUTIVE CHEF</span>
          <p>
            Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="col-md-4" data-aos="flip-right">
          <h5>Idris Agboola</h5>
          <span>CHEF DE CUISINE</span>
          <p>
            Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberInfo;
