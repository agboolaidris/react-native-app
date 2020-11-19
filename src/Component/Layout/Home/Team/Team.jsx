import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Team() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid team">
      <div className="container">
        <div data-aos="fade-up">
          <h1 className="display-3">KITCHEN TEAM </h1>
          <span>Award winning meals, delivered by an amazing team</span>
        </div>
      </div>
    </div>
  );
}

export default Team;
