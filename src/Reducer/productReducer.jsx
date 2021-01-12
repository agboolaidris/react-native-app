import food from "../imgs/pizza.jpg";
const initial = {
  product: [
    {
      id: "product-1",
      image: food,
      description: "Pizza With Drink",
      categories: "foreign dish",
      type: "rice",
      price: 500.3,
    },
    {
      id: "product-2",
      image: food,
      description: "Pizza With Drink",
      categories: "foreign dish",
      type: "yam",
      price: 500.6,
    },
    {
      id: "product-3",
      image: food,
      description: "Pizza With Drink",
      categories: "local dish",
      type: "rice",
      price: 550.3,
    },
    {
      id: "product-4",
      image: food,
      description: "Pizza With Drink",
      categories: "local dish",
      type: "bean",
      price: 400.6,
    },
  ],
};
const producetReducer = (state = initial, action) => {
  return state;
};

export default producetReducer;
