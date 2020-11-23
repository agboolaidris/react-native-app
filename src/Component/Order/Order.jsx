import React, { useState } from "react";
import { connect } from "react-redux";

function Order({ products }) {
  //change the heart icon color when click
  const [state, setstate] = useState(false);

  const { product } = products;
  const Each_product = product.map((index) => {
    return (
      <div key={index.id} className="col-md-3 col-6">
        <div className="cards">
          <div className="img">
            <img src={index.image} alt="" />
          </div>
          <div className="description">
            <p>{index.description}</p>
            <span className="price">{index.price}</span>
            <i
              className={`fas fa-heart ${state ? "heart" : "love"}`}
              onClick={() => (state ? setstate(false) : setstate(true))}
            ></i>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container order-container">
      <div className="row">{Each_product}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.product,
  };
};

export default connect(mapStateToProps)(Order);
