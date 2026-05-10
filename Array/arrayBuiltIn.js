//Map() ---> to transform the array we use map()
let arr = [1, 2, 3, 4, 5]
let newarr = arr.map(i => i * 2);
console.log("Map () example - ", newarr)

//filter ---> condition

let evenNumbers = arr.filter(num => num % 2 == 0)
console.log("filter() example - ",evenNumbers)


//sort() ---> sorting array elements in ascending or descending

let arr1 =  [11,3,24,42,9]

let result = arr1.sort(function (a,b) {
    return b - a;
}) //descending


console.log("Desceding -- ", result)

let res = arr1.sort((a, b) => a - b);

console.log("ascending -- ", res)

//reduce()

let ans = arr.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);
console.log("reduce ==> ", ans)

//destructuring
let [a, b] = arr;
console.log(a);
console.log(b);

let [x, y, , z] = arr;
console.log(x);
console.log(y);
console.log(z);

//spread
let arr2 = [...arr];
console.log(arr2);

//inserting element in array using splice()

let fruits = ["apple", "grapes", "pineapple"]
fruits.splice(1, 0, "mango", "orange") //inserting at index 1
console.log(fruits)

//some()

let marks = [12, 35, 48, 56, 85];
let answer = marks.some(function (val) {
    return val > 55;  
})
console.log(answer);

//every()
let numbers = [2, 4, 6, 8, 10]
let checkEven = numbers.every(function (num) {
    return num % 2 == 0;
});
console.log(checkEven);