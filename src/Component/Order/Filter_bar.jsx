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
      <div className="col-md-4 search">
        <form onSubmit={submit_price}>
          <div>
            <input
              type="text"
              value={name}
              onChange={filter_name}
              placeholder="&#xF002; search"
            />
          </div>
        </form>
      </div>
      <div className="col-md-4 col-6">
        <select value={price} onChange={filter_price}>
          <option value="">Filter</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="col-md-4 col-6">
        <select value={categories} onChange={filter_categories}>
          <option value="">Type</option>
          <option value="local dish">Local Dish</option>
          <option value="foreign dish">Foreign Dish</option>
        </select>
      </div>
    </>
  );
}

export default Filter_bar;
