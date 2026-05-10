//callback function --> A callback is simply a function that we pass to another function, to be called later when something finishes.

function sum(a,b) {
    console.log(a+b);
}

function multiply(a, b) {
    console.log(a * b);
}

function calculate(a, b, callBackFunction) {
    callBackFunction(a, b);
}

calculate(5, 2, multiply);

//callbackHell --> when callbacks are nested inside callbacks again and again, making code messy and hard to read

// function getData(dataID,getNextData) {
//     setTimeout(() => {
//         console.log("data", dataID);
//         if (getNextData) {
//             getNextData();
//         }
//     },2000)
// };

// getData(1, () => {
//     console.log("getting data 2...");
//     getData(2, () => {
//         console.log("getting data 3...");
//         getData(3, () => {
//             console.log("success !");
            
//         })
//     })
// })

//Deeply nested callbacks

function loginUser(email, password, callback) {
    console.log("logging in ...");
    setTimeout(() => {
        const user = { id: 1, name: "Kanishk" };
        callback(user);
    },1000)
}

function getLocation(userId, callback) {
    console.log("finding your location ...");
    setTimeout(() => {
        const location = { city: "jaipur", area: "Jhotwara" };
        callback(location);
    },1000)
}

function findRestaurants(city, callback) {
    console.log("searching for the restaurant ...");
    setTimeout(() => {
        const restaurant = { id: 101, name: "The Dome" };
        callback(restaurant);
    },1000)
}

function placeOrder(restaurantId, callback) {
    console.log("placing your order please wait for a while ...");
    setTimeout(() => {
        const order = { orderId: 666, item: "paneer tikka" };
        callback(order);
    },1000)
}

function sendConfirmation(orderId, callback) {
    console.log("Sending confirmation ...");
    setTimeout(() => {
        const message = "your paneer tikka is on the way";
        callback(message);
    },1000)
}

loginUser("test@gmail.com", "0000", (user) => {
    console.log("got user :", user.name);
    
    getLocation(user.id, (location) => {
        console.log("got location : ", location.city);

        findRestaurants(location.area, (restaurant) => {
            console.log("got restaurant : ", restaurant.name);

            placeOrder(restaurant.id, (order) => {
                console.log("order placed : ", order.item);
                     
                sendConfirmation(order.orderId, (message) => {
                    console.log("confirmation :", message);
                         
                });
            });
        });
    });
})