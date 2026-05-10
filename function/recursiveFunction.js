//sum of n natural numbers 

function sum(n) {
  if (n === 1) {
    return 1; // base case
  }
  return n + sum(n - 1); // recursive call
}

console.log(sum(5));

//factorial

function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));