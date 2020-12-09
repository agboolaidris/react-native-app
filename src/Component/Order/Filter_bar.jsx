import React from "react";

function Filter_bar({
  price,
  categories,
  filter_categories,
  filter_price,
  name,
  filter_name,
  submit_price,
}) {
  return (
    <>
      <div className="col-md-4">
        <form onSubmit={submit_price}>
          <div>
            <label htmlFor="">search</label>
            <input type="text" value={name} onChange={filter_name} />
          </div>
        </form>
      </div>
      <div className="col-md-4 col-6">
        <label>Price</label>

        <select value={price} onChange={filter_price}>
          <option value="">Any Price</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="col-md-4 col-6">
        <label>Categories</label>
        <select value={categories} onChange={filter_categories}>
          <option value="">Both</option>
          <option value="local dish">Local Dish</option>
          <option value="foreign dish">Foreign Dish</option>
        </select>
      </div>
    </>
  );
}

export default Filter_bar;
