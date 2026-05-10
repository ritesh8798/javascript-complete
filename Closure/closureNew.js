function outer() {
  function inner() {
    console.log("Hello Ritesh");
  }

  return inner;
}

const myFunc = outer();
myFunc();
