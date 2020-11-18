import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../../../../imgs/slide1.jpg";
import slide2 from "../../../../imgs/slide2.jpg";
import slide3 from "../../../../imgs/slide3.jpg";

const fadeImages = [slide1, slide2, slide3];

function Slide() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Slide;
