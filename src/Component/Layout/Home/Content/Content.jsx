import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../../../../imgs/slide1.jpg";
import slide2 from "../../../../imgs/slide2.jpg";
import slide3 from "../../../../imgs/slide3.jpg";

const fadeImages = [slide1, slide2, slide3];

function Content() {
  return (
    <div className="container-fluid content">
      <div className="slide-container  ">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} className="img" />
            </div>
            <div className="content-info">
              <h1 className="display-4">WELCOME TO IRIS RESTURANT</h1>
              <p>The best gourmet restaurant available in Cape Town</p>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container ">
              <img src={fadeImages[1]} className="img" />
            </div>
            <h2>Second Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} className="img" />
            </div>
            <h2>Third Slide</h2>
          </div>
        </Fade>
      </div>
    </div>
  );
}
export default Content;
