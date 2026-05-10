let lang = ["HTML", "JAVA", "PYTHON", "PHP", "C++"]

//accessing element of an array
console.log(lang[0]);  //first element of array
console.log(lang[3]);
console.log()

//accessing the last element in an array
let last = lang[(lang.length - 1)];
console.log(last)
console.log()


//modifying array elements 
lang[2] = "JAVASCRIPT"

//adding elements to the array
lang.push("PYTHON"); //adding item to the last of an array.
console.log()

lang.unshift("C"); //adding item to the first of an array.
console.log()

//removing elements from an array
console.log(lang);
lang.pop() // removes an item from the last of an array.(last index)
console.log(lang);

lang.shift() // removes the element from the first index of an array.(first index)
console.log(lang);

lang.splice(1,2); //removes or replaces item from the array.
console.log()

//increasing the length of an array
console.log(lang.length)
console.log(lang)
console.log()

lang.length = 6
console.log(lang.length)
console.log(lang)
console.log()

lang.length = 3


//iterating through array elements
for (let i = 0; i < lang.length; i++){
    console.log(lang[i]);
}

//concatenation of an array
let language = ["JAVA", "PYTHON", "C"]
let newlang = console.log(lang.concat(language));
console.log()

//converting an array to a string

console.log(language.toString());
console.log()

//recognizing javascript arrays
console.log(Array.isArray(lang));
console.log()

console.log(lang instanceof Array)
console.log()
