import React from "react";
import { Fade } from "react-slideshow-image";
import slide1 from "../../../../imgs/slide1.jpg";
import slide2 from "../../../../imgs/slide2.jpg";
import slide3 from "../../../../imgs/slide3.jpg";
import Slide1 from "../Content/Slide1";

const fadeImages = [Slide1, slide2, slide3];

function Welcome() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-8">
          <div className="slide-container  ">
            <Fade>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[0]} className="img" />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container ">
                  <img src={fadeImages[1]} className="img" />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[2]} className="img" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
}

export default Welcome;
