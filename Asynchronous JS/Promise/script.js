//promise -->  A Promise is an OBJECT that represents a future value.A Promise starts as Pending, then becomes either Fulfilled or Rejected. It can never go back or change twice.

const myPromise = new Promise(function (resolve, reject) {
  // If everything goes well → call resolve
  // If something goes wrong → call reject
});

const pizzaPromise = new Promise(function (resolve, reject) {
  console.log("making pizza ...");
  setTimeout(function () {
    const pizzaReady = 0;
    if (pizzaReady) {
      resolve("Here is your pizza !");
    } else {
      reject("sorry,pizza burnt ");
    }
  }, 3000);
});

console.log("please sit and wait...");

pizzaPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

//Always RETURN the Promise from a function

function getUser(id) {
    //return promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Fetching user from database...");
      resolve({ id: id, name: "Rahul", city: "Jaipur" });
    }, 2000);
  });
}

const result = getUser(1);
console.log(result); // Promise { <pending> } 

getUser(1)
  .then(function (user) {
    console.log("Name:", user.name);
    console.log("City:", user.city);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });