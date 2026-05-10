//this in the global context --> Outside any function, this refers to the global object (window in browsers).
console.log(this);

//this inside a regular function --> In a regular function, this refers to the global object (or undefined in strict mode).

function greet() {
  console.log(this);
}

greet();

//this inside an object method --> When a function is called as a method of an object, this refers to that object.

let person = {
  name: "Raj",
  age: 25,
  greet: function () {
    console.log(this);
  },
};

person.greet();

//this inside an arrow function --> Arrow functions do NOT have their own this. They inherit this from the surrounding (parent) scope.

const obj = {
  name: "Raj",
  greet: () => {
    console.log(this.name); // undefined (inherits from global)
  },
};

obj.greet();

const person1 = {
  name: "Raj",
  greet: function () {
    const inner = () => {
      console.log(this.name); // "Raj" (inherits from greet)
    };
    inner();
  },
};

person1.greet();

//this inside a class --> Inside a class, this refers to the instance of the class.

class Car {
  constructor(brand) {
    this.brand = brand; // "this" = the new object
  }

  show() {
    console.log(this.brand); // "Toyota"
  }
}

const car = new Car("Toyota");
car.show();

//manual binding - call,apply,bind

function print() {
  console.log(`Hello ${this.name}`);
}

const person2 = { name: "Ravi" };

print.call(person2);

function introduce(city, country) {
  console.log(`I am ${this.name} from ${city}, ${country}`);
}

const person3 = { name: "Raj" };

introduce.call(person3, "Jaipur", "India");

//apply
function greet1() {
  console.log("Hello, " + this.name);
}

const person4 = { name: "Priya" };

greet1.apply(person4);

//bind
function greet2() {
  console.log("Hello, " + this.name);
}

const person5 = { name: "Rahul" };

const boundGreet = greet2.bind(person5); // not called yet

boundGreet();
boundGreet();

function introduce2(city, country) {
  console.log(`I am ${this.name} from ${city}, ${country}`);
}

const person6 = { name: "Rahul" };

const boundFn = introduce2.bind(person6, "Delhi", "India");
boundFn();

//call vs bind vs apply

function introduce3(city, country) {
  console.log(`I am ${this.name} from ${city}, ${country}`);
}

const person7 = { name: "Raj" };

// call  → immediate, args one by one
introduce3.call(person7, "Jaipur", "India");

// apply → immediate, args as array
introduce3.apply(person7, ["Surat", "India"]);

// bind  → returns new function, call later
const fn = introduce3.bind(person7, "Pune", "India");
fn();


// Use .call() → when you want to run immediately with a specific this
// Use .apply() → when your arguments are already in an array
// Use .bind() → when you need to save the function for later (callbacks, event listeners, timers)