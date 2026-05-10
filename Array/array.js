let arr = [10, 20, 30, 40, 50]

let brr = new Array(1, "Ram", 100)

// console.log(arr)
// console.log(brr)

// console.log(typeof arr)
// console.log(typeof brr)

//Accessing array element

// console.log(arr[1])
// console.log(brr[2])

//changing array element

// arr[0] = 100
// brr[0] = 10

let fruits = ["banana", "apple", "orange", "mango", "papaya", "grapes"]

//accessing first element
console.log(fruits[0])

//accessing last element
console.log(fruits[-1])

//traversing through the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//adding array element
fruits.push("guava")

console.log(fruits)