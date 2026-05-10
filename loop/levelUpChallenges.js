let teas = ["green tea", "oolong tea", "black tea", "chai", "white tea", "yellow tea"]

let selectedteas = []

// console.log("original tea ",teas)

for (let i = 0; i < teas.length; i++){
    if (teas[i] === "chai") {
        break;
    }
    selectedteas.push(teas[i])
}

// console.log("selected teas ", selectedteas)

let cities = ["Delhi", "Mumbai", "Kolkata", "Pune", "Chennai"]

let visitedCity = []

for (let i = 0; i < cities.length; i++){
    if (cities[i] === "kolkata" || cities[i] === "Kolkata") {
        continue;
    }
    visitedCity.push(cities[i])
}
// console.log(visitedCity)

let Numbers = [1, 2, 3, 4, 5]

let smallnumbers = []

for (const num of Numbers) {
    if (num === 4) {
        break;
    }
    smallnumbers.push(num)
}
// console.log(smallnumbers)

let Teas = ["green tea", "herbal tea", "yellow tea", "oolong tea", "white tea"]

let preferredteas = []

for (const tea of Teas) {
    if (tea === "yellow tea"){
        continue;
    }
    preferredteas.push(tea)
}
// console.log(preferredteas)

let citYPopulation = {
    "Delhi": 33807403,
    "Bangalore": 14008262,
    "Chennai": 12053697,
    "Mumbai": 21673570,
    "Kolkata": 15570786,
}

let newCityPopulation = {}

for (const city in citYPopulation) {

    if (city === "Kolkata") {
        break;
    }
    
    newCityPopulation[city] = citYPopulation[city]
}
// console.log(newCityPopulation)

let selectedCities = {}

for (const city in citYPopulation) {
   
    if (citYPopulation[city] < 15000000) {
        continue;
    }
    selectedCities[city] = citYPopulation[city]
}
console.log(selectedCities)

