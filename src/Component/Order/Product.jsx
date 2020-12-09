import React, { useState } from "react";
import Format_currency from "./Format_currency";

function Product({ products }) {
  //change the heart icon color when click
  const [state, setstate] = useState(false);

  const Each_product = products.map((index) => {
    return (
      <div key={index.id} className="col-md-3 col-6">
        <div className="cards">
          <div className="img">
            <img src={index.image} alt="" />
          </div>
          <div className="description">
            <p>{index.description}</p>
            <span className="price">{Format_currency(index.price)}</span>
            <i
              className={`fas fa-heart ${state ? "heart" : "love"}`}
              onClick={() => (state ? setstate(false) : setstate(true))}
            ></i>
          </div>
        </div>
      </div>
    );
  });

  return <>{Each_product}</>;
}

export default Product;
