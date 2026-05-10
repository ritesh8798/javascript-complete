let lang = ["html", "css", "javascript", "php", "c++"]
console.log(lang.join("/"))  //It uses a specified separator between each element in the resulting string.
console.log()

let frameworks = ["React.js", "express.js", "Angular"]
console.log(lang.concat(frameworks));
console.log()

let arr = [[10, 20], ["A", "B", "C", "D"], [1, 2, 3]]
let arr2 = arr.flat(Infinity); //it merges all the given array and reduces all the nesting present in it.
console.log(arr2) 

let a = [1, 2, 3, 4, 5];
let b = a.slice(1, 4) //creates a new array by extracting elements based on the starting and end index.
console.log(b)
console.log()

let a1 = [1, 2, 3, 4, 5, 6]  //creates a new array with all elements that pass the test implemented by the provided function.
let a2 = a1.filter((num) => num > 2)
console.log(a2)
console.log()

let res = a1.some((num) => num < 3)
console.log(res)
console.log()