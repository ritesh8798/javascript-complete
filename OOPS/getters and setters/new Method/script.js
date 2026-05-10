class Person {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get FullName() {
    return `Hello my name is ${this.#firstName} ${this.#lastName}`;
  }

  set FullName(name) {
    const parts = name.split(" ");
    this.#firstName = parts[0];
    this.#lastName = parts[1];
  }
}


//Notice — no () brackets! Used exactly like a normal property.


const per = new Person("Ritesh", "Sharma");
console.log(per.FullName);

//after setting new name

per.FullName = "Amit kumar";
console.log("My new name is ...");

console.log(per.FullName);

//Getter Without Setter — Read Only!

class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  // read-only — no setter exists
  get area() {
    return Math.PI * this.#radius ** 2;
  }

  get circumference() {
    return 2 * Math.PI * this.#radius;
  }
}

const circle = new Circle(5);
console.log(circle.area.toFixed(2));         
console.log(circle.circumference.toFixed(2));