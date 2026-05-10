function calculate(price, operation) {
  return operation(price);
}

// callback functions
function tenPercentDiscount(price) {
  return price - (price * 10) / 100;
}

function twentyPercentDiscount(price) {
  return price - (price * 20) / 100;
}


console.log(calculate(1000, tenPercentDiscount));   
console.log(calculate(1000, twentyPercentDiscount)); 