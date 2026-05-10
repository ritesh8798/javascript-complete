function sumOfSomething(a, b, callback) {
  const val1 = callback(a);
  const val2 = callback(b);

  return val1 + val2;
}


const ans = sumOfSomething(2, 3, function(n) {
  return n * n;
});

console.log(ans)