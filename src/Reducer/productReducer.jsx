import food from "../imgs/pizza.jpg";
const initial = {
  product: [
    {
      id: "product-1",
      image: food,
      description: "Pizza With Drink",
      class: "traditional",
      type: "rice",
      price: "#500",
    },
    {
      id: "product-2",
      image: food,
      description: "Pizza With Drink",
      class: "traditional",
      type: "rice",
      price: "#500",
    },
  ],
};
const producetReducer = (state = initial, action) => {
  return state;
};

export default producetReducer;
