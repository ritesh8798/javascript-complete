//Named function

function Print() {
  console.log("MY NAME IS RITESH SHARMA....");
}

Print(); // function call

//Anonymous Function -- A function without name is called Anonymous Function.

let anonymous = function () {
  console.log("This is an Anonymous Function...");
};

anonymous();

//Function Expression --> when we assign a function into a variable whether it is anonymous or named function .

const add = function (a, b) {
  return a + b;
};

console.log("this is function expression : ", add(5, 6));

//Arrow function

const multi = (a, b) => a * b;

console.log("this is a example of arrow function : ", multi(10, 2));

//parameter vs argument

function intro(name, age) /* parameter */ {
  console.log(`My name is ${name} and my age is ${age}.`);
}

intro("virat", 26); //argument

//return statement

function square(x) {
  return x * x;
}

let result = square(5);
console.log(result);

//default parameters

function greet(name = "guest") {
  console.log("hello " + name);
}

greet();

//callback function

function calculate(a, b, operation) {
  return operation(a, b);
}

// callback functions
function addition(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, addition));
console.log(calculate(2, 3, multiply));

//Higher order function ---> Function as argument

function greet(name) {
  return "Hello " + name;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser("Ritesh", greet));

//Rest

function test(a, ...b) {
  console.log(a, b);
}

test(1, 2, 3, 4);//multiple arguments