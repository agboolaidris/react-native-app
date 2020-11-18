import React from "react";
import Slide from "./Slide";
import slide1 from "../../../../imgs/slide1.jpg";
import slide2 from "../../../../imgs/slide2.jpg";

function Welcome() {
  return (
    <div className="container welcome">
      <div className="row">
        <div className="col-md-6">
          <Slide />
        </div>
        <div className="col-md-6">
          <div className="welcome-info">
            <h2>AMAZING MEALS & GREAT ENTERTAINMENT</h2>

            <span className="lead">We hope to see you soon!</span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Venenatis vitae, justo. Nullam dictum felis eu pede mollis
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
              nisi. Aenean vulputate eleifend tellus.
            </p>
            <p>Nulla consequat massa quis enim. Doncus ut, imperdiet a.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 book-now">
          <div className="cards">
            <div className="cards-img-container">
              <img src={slide1} alt="" />
            </div>
            <div>
              <span>
                <i className="fas fa-star"></i>
                THE BEST INGREDIENTS
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

export default Welcome;
