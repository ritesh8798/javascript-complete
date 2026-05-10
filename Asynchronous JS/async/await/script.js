// // Normal function
// function greet() {
//   return "Hello Ritesh!";
// }


// // Async function — just add "async" before function
// async function greet() {
//   return "Hello Ritesh!";
// }

// //async makes a function ALWAYS return a Promise!

// async function greet() {
//   return "Hello Ritesh!"; // looks like normal value
// }

// // But it actually returns a Promise!
// greet().then(function (result) {
//   console.log(result); // "Hello Ritesh!"
// });

// //await pauses the function and waits for Promise to finish.
// // Then continues from where it stopped.

// // A simple promise
// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Ritesh" });
//         }, 2000);
//     });
// }


// //PROMISE WAY
// getUser()
//     .then(function(user) {
//         console.log(user.name); // Ritesh
//     });


// //ASYNC/AWAIT WAY — much cleaner!
// async function showUser() {
//     const user = await getUser(); // waits for getUser to finish
//     console.log(user.name);       // Ritesh
// }

// showUser();

// ─────────────────────────────────────
// ALL FUNCTIONS — same as before
// ─────────────────────────────────────

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user logged in ...");
            resolve({ userId: 111, name: "abhishek" });
        }, 1000);
    });
};

function getLocation(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting location ...");
            resolve({ city: "Delhi", area: "dwarka sector 8" });
        }, 1000);
    })
};

function findRestaurants(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Restaurant found ...");
            resolve({ restaurantId: 101, name: "The Fern" });
        }, 1000);
    })
};

function placeOrder(restaurantId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Placing your order ...");
            resolve({ orderId: 108, item: "samosa" });
        }, 1000);
    })
};

function sendConfirmation(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your samosa is on the way ...");
        }, 1000);
    })
};

//older way -- promies
loginUser("test@gmail.com", "6666")
    .then((user) => {
    console.log("got user :", user.name);
    return getLocation(user.userId); 
    })
    .then((location) => {
    console.log("got location :", location.city);
    return findRestaurants(location.city);
    })
    .then((restaurant) => {
    console.log("got restaurant :", restaurant.name);
    return placeOrder(restaurant.restaurantId);
    })
    .then((order) => {
    console.log("order placed : ", order.item);
    return sendConfirmation(order.orderId);
    })
    .then((message) => {
    console.log("confirmation : ", message);
    })
    .catch((error) => {
    console.log("error", error);
});

async function orderFood() {
    try {
            const user = await loginUser("test@gmail.com", "8888");
            console.log("got user : ", user.name);

            const location = await getLocation(user.userId);
            console.log("location found : ", location.city);

            const restaurant = await findRestaurants(location.city);
            console.log("got restaurant : ", restaurant.name);

            const order = await placeOrder(restaurant.restaurantId);
            console.log("order placed : ", order.item);

            const message = await sendConfirmation(order.orderId);
            console.log("confirmation : ", message);
    
    } catch (error) {
            console.log("Something went wrong:", error);
    }
};
orderFood();