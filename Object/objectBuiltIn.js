const student = {
  name: "Ritesh",
  age: 25,
  course: "MCA",
  city : "Jaipur",
};

//keys
console.log(Object.keys(student))

//values
console.log(Object.values(student))

//entries 
console.log(Object.entries(student))

//object destructuring
const { name, age } = student;
console.log(name)
console.log(age)

//spread operator
const newStudent = { ...student, grade: "A" }
console.log(Object.entries(newStudent))

//deepclone -- objects are refrence type so copying like this is wrong so we use deep clone

const obj1 = { name: "Ritesh", address: { city: "Jodhpur" } };
const obj2 = obj1;

obj2.address.city = "Delhi";

console.log(obj1.address.city); // this is also changed so this is wrong

//structuredclone()
let obj3 = structuredClone(obj1)

//JSON Method 
let obj4 = JSON.parse(JSON.stringify(obj1))