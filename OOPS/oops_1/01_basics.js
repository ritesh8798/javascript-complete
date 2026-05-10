class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let s1 = new Student("Ritesh", 25); //instance of class student 
s1.greet();


//inheritance

class Animal{
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log("Eating ...");
    }
}

class Dog extends Animal{
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("Barking ...");
    }
}

let d1 = new Dog("tommy");
console.log(d1.name);

d1.eat();
d1.bark();

//super keyword use

class Phone {
  constructor(brand, battery) {
    // parent params
    this.brand = brand;
    this.battery = battery;
  }

  showBattery() {
    console.log(`${this.brand} has ${this.battery}mAh battery`);
  }

  dial(number) {
    console.log(`${this.brand} is calling ${number}...`);
  }
}

class SmartPhone extends Phone {
  constructor(brand, battery, screen, camera) {
    //         ↑       ↑        ↑       ↑
    //       parent  parent   own     own

    super(brand, battery); // parent params → super()
    this.screen = screen; // own param → this.
    this.camera = camera; // own param → this.
  }

  makeCall(number) {
    super.dial(number); //calls phone's call method -> super.methodname()
  }

  showAllInfo() {
    super.showBattery(); // calls Phone's showBattery()
    console.log(`Screen: ${this.screen}`);
    console.log(`Camera: ${this.camera}`);
  }
}

const phone = new SmartPhone("Samsung", 5000, "6.5 inch", "108MP");

console.log(phone.brand);   // "Samsung"  ← came from super
console.log(phone.battery); // 5000       ← came from super
console.log(phone.screen);  // "6.5 inch" ← child's own
console.log(phone.camera);  // "108MP"    ← child's own

phone.showBattery(); //using PARENT's methods from child object

phone.makeCall("1234567890");
phone.showAllInfo();


//encapsulation

class Person {
  #age;  // truly private — JS enforces this

  constructor(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const p = new Person(21);
console.log(p.getAge()); // 21
// console.log(p.#age);     //ERROR — cannot access!