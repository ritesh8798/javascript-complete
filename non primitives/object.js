const userProfile = {
    firstname: "Ritesh",
    email: "2000riteshsharma@gmail.com",
    isloggedin : true
}

console.log(userProfile)
console.log(typeof userProfile)
console.log("firstname --> ", userProfile.firstname)

userProfile.firstname = "virat"
userProfile.isloggedin = false

console.log(userProfile)
console.log("firstname --> ", userProfile.firstname);