// save data
localStorage.setItem("username", "Ritesh");

// get data
let user = localStorage.getItem("username");
console.log(user); // Output: Ritesh

// remove
localStorage.removeItem("username");

// clear all
localStorage.clear();


//same as above but with JSON
let user = {
    name: "Ritesh",
    age: 24,
    city: "Delhi"
};
localStorage.setItem("user", JSON.stringify(user));
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser); // Output: { name: "Ritesh", age: 24, city: "Delhi" }