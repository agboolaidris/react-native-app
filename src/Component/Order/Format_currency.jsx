const Format_currency = (num) => {
  let a = "#" + Number(num.toFixed(1)).toLocaleString();

  return a;
};

export default Format_currency;
