let name = "Ritesh Sharma"
let url = "ritesh@rsb.com"
let fullName = new String("       Rahul kumar      ")
let newName = "Rahul kumar"
let country = "INDIA"
let line = "i love my country and my people ."

console.log(name)
console.log(fullName)
//length of a string

let length = name.length
console.log("length = ",length)

//accessing string members

let letter = name[2]
console.log(letter)

let code = newName.charAt(3)
console.log(code)

console.log(fullName.trim())

console.log(newName.indexOf("k"))
console.log(newName.indexOf("r"))
console.log(name.length)
console.log(newName.substring(1,4))
console.log(newName.split(" "))
console.log(newName.concat(url))
console.log(newName.concat(" 123"))
console.log(newName.replace("kumar","yadav"))
console.log(country.toLowerCase())
console.log(url.toUpperCase())
console.log(url.split("."))
console.log(url.endsWith("com"))
console.log(country.lastIndexOf())
console.log(line.slice(1,10))
console.log(line.split(" "))