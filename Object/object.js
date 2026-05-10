let obj = {
  name: "Ritesh Sharma",
  age: 26,
  university: "VIT",
  state: "Rajasthan",
};

//access
console.log(obj.name);
console.log(obj.age);
console.log(obj.state);

//bracket notation
console.log(obj["university"]);

//add
obj.city = "Jaipur";
console.log(obj["city"]);

//update
obj.name = "Vaibhav sharma";
console.log("updated name -- ", obj.name);

//delete
delete obj.university;

//loop through object
for (let key in obj) {
  console.log(key, obj[key]);
}

//object with function

let user = {
  name: "mahesh kumar",
  age: 35,
  greet: function () {
    console.log("Hello");
  },
};

console.log(user.greet());

//nested objects

const user1 = {
  name: "Ritesh",
  address: {
    city: "Jodhpur",
    state: "Rajasthan",
  },
};

console.log(user1.address.city);