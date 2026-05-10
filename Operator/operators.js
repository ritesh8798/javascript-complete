let num1 = 25
let num2 = 5
console.log(num1 - num2)
console.log(num1 + num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num2**3)
console.log(++num1)
console.log(num2--)
console.log(num2)
console.log(--num1)
console.log(++num2)

// comparison operators
console.log(num1 > num2)
console.log(num2 < num1)
console.log(num1 == num2)
console.log(num1>=num2)
console.log(num1<=num2)

// loose equality and tight equality
let a = "10"
let b = 10 
console.log(typeof(a))
console.log(typeof(b))
console.log(a == b) // loose equality return true because it only compare value 
console.log(a != b) //returns false 


console.log(a === b)//tight equality returns false 
console.log(a !== b) //returns true

// Assignment operators

let x = 25
let y = 15
x+=y // x = x + y
console.log("x = "+ x)

x-=y // x = x - y
console.log("x = "+ x)

x*=y // x = x * y
console.log("x = "+ x)

x/=y // x = x / y
console.log("x = "+ x)

x%=y // x = x % y
console.log("x = "+ x)

// logical operators

let m = 10
let n = 15

let cond_1 = (m > n)
let cond_2 = (m === n)
let cond_3 = (m < n)

console.log(cond_1 && cond_2)
console.log(cond_1 || cond_2)
console.log(cond_1 || cond_3)
console.log(!cond_1)
console.log(!cond_3)

//comparison between number and string

let num3 = "2";
let num4 = "12";
let num5 = 2;
let fullname = "john";
let newname = "ram";

console.log(num3 > num4);
console.log(num3 < num4);
console.log(num3 == num4);
console.log(num3 > fullname);
console.log(num3 < fullname);
console.log(num3 == fullname);
console.log(fullname > newname);
console.log(fullname < newname);
console.log(num5 < fullname);
console.log(num5 < newname);
console.log(num5 > fullname);