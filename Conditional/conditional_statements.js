let age = 20 
if ( age > 18){
    console.log("you can vote !")
}
if( age < 18){
    console.log("you can't vote !")
}

// if else statements

let mode = "dark mode"
let color ;
if (mode === "dark mode"){
    color = "black"
}
else{
    color = "white"
}
console.log(color)

//else if statements

let num = 25
if (num < 18){
    console.log("junior")
}
else if (num > 60){
    console.log("senior")
}
else{
    console.log("middle")
}

//ternary operator

let a = 20
let result = a > 18 ? "mature" : "immature" ;
console.log(result) 

