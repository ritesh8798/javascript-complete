//function without return type

function myName(name) {
    console.log(`Hello my name is ${name}`)
}

myName("Ritesh Sharma")


//function with return  type
function makeTea(typeofTea) {
    return `Making ${typeofTea}`;
}

let orderedTea = makeTea("green tea");

console.log(orderedTea)

function sum(num1, num2) {
    let sum = num1 + num2
    return sum;
}

let mySum = sum(10, 20)
console.log(mySum)

//Arrow function

let getExp = (num1, num2) => {
    let exp = num1 ** num2;
    return exp;
}

console.log(getExp(2,5))