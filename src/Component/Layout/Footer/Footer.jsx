import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer" data-aos="zoom-in">
      <div className="container-fluid ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-4">
              <h5 className="name">IRIS IKEJA</h5>
              <p className="address">
                2-4 opebi street,Awolowo way, ikeja Lagos.
              </p>
              <p className="telphone">+2348137088555</p>
              <a href="mailto: agboolaisholaidreez@gmail.com" className="mail">
                iris_ikeja@gmail.com
              </a>
            </div>
            <div className="col-md-3 mt-4">
              <h5 className="name">IRIS LEKKI</h5>
              <p className="address">
                2-4 taslim street off Adekunle way, Lekki Lagos.
              </p>
              <p className="telphone">+2348137088555</p>
              <a href="mailto: agboolaisholaidreez@gmail.com" className="mail">
                iris_lekki@gmail.com
              </a>
            </div>
            <div className="col-md-3 mt-4 ">
              <h5 className="name">IRIS VI</h5>
              <p className="address">
                2-4 Tinubu street, Victoria Island Lagos.
              </p>
              <p className="telphone">+2348137088555</p>
              <a href="mailto: agboolaisholaidreez@gmail.com" className="mail">
                iris_vi@gmail.com
              </a>
            </div>
            <div className="col-md-3 mt-4">
              <h5 className="name">IRIS HEAD OFFICE</h5>
              <p className="address">
                203 Azekewe street, Awolowo Road, Ikoyi Lagos.
              </p>
              <p className="telphone">+2348137088555</p>
              <a href="mailto: agboolaisholaidreez@gmail.com" className="mail">
                irisikeja@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row justify-content-between ">
            <div className="col-md-3">
              <p>© Copyright - Woww 2020</p>
            </div>
            <div className="col-md-3 icon ">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
