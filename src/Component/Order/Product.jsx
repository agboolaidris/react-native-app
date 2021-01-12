import React, { useState } from "react";
import Format_currency from "./Format_currency";

function Product({ products, cartItems }) {
  //change the heart icon color when click

  return (
    <>
      {products.map((index) => {
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
                  className={`fas fa-heart love`}
                  onClick={() => cartItems(index)}
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
