let myName = "Ritesh Sharma";
let newString = "Mind, Power, Soul, Power"

let len = myName.length;
console.log("lenght = ", len)
console.log()

//slice ....
let a = myName.slice(7, 13)
let b = myName.slice(0, 7)
console.log(a)
console.log(b)
console.log()

//substring

let c = newString.substring(13, 17)
console.log(c)

//substr

let d = newString.substr(6, 3)
console.log(d)
console.log()

//charat
console.log(myName.charAt(3))
console.log()
//replace
let newStr = newString.replace("soul", "string")
console.log(newStr)
console.log()

//replaceall
let str = newString.replaceAll("Power","Strength")
console.log(str)
console.log()

//split
let A = newString.split(',')
console.log(A)

//trimStart --- removes whitespaces from the beginning of a string

let str1 = "    goodnight    "
console.log(str1)
let str2 = str1.trimStart()
console.log(str2)

//trimend --- removes whitespaces from the ending of a string
console.log(str1)
console.log(str1.length)
let str3 = str1.trimEnd()
console.log(str3)
console.log(str3.length)