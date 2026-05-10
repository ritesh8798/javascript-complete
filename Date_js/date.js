// we can create date obects by these ways
/*
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
*/
const d = new Date()

console.log(d.toString())
console.log(d.toLocaleDateString())
console.log(d.toDateString())
console.log(d.toLocaleTimeString())

const newDate = new Date("2025,07,22")
console.log(newDate.toLocaleTimeString())

const dueDate = new Date("2025,07,22 15:50:53")
console.log(dueDate.toString())

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
const d2 = new Date(2024,5,12,11,25,36,3)
console.log(d2.toString())
