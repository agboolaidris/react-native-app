import React, { useState } from "react";
import { connect } from "react-redux";
import Filter_bar from "./Filter_bar";

import Product from "./Product";

function Order({ foods }) {
  const { product } = foods;

  const [state, setstate] = useState({
    product,
    categories: "",
    price: "",
    name: "",
  });

  const filter_categories = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
      setstate({
        ...state,
        product: product,
        categories: e.target.value,
      });
    } else {
      setstate({
        ...state,
        categories: e.target.value,
        product: product.filter((index) => {
          return index.categories.indexOf(e.target.value) >= 0;
        }),
      });
    }
  };

  const filter_price = (e) => {
    console.log(e.target.value);
    const price = e.target.value;
    setstate({
      ...state,
      price: price,
      product: product.slice().sort((a, b) => {
        if (price == "lowest") {
          return a.price > b.price ? 1 : -1;
        } else if (price == "highest") {
          return a.price < b.price ? 1 : -1;
        } else {
          return a.id > b.id ? 1 : -1;
        }
      }),
    });
  };

  const filter_name = (e) => {
    setstate({ ...state, name: e.target.value });
  };

  const submit_price = (e) => {
    e.preventDefault();
    console.log(state.name);
    const search_product = product.filter((index) => {
      return index.type === state.name;
    });
    console.log(search_product);
    setstate({
      ...state,
      product: search_product,
    });
  };
  return (
    <div className="container order-container">
      <div className="row filter-nav">
        <Filter_bar
          price={state.price}
          categories={state.categories}
          name={state.name}
          filter_categories={filter_categories}
          filter_price={filter_price}
          filter_name={filter_name}
          submit_price={submit_price}
        />
      </div>
      <div className="row">
        <Product products={state.product} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    foods: state.product,
  };
};

export default connect(mapStateToProps)(Order);
