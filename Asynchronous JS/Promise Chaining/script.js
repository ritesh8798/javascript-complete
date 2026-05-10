function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user logged in ...");
      resolve({ userId: 1, name: "Ritesh sharma" });
    },1000)
  })
}

function getLocation(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting location ...");
      resolve({ city: "Jaipur", area: "Gandhinagar" });
    },1000)
  })
}

function findRestaurant(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("restaurant found ...");
      resolve({ restaurantId: 666, name: "The Dome" });
    }, 1000);
  })
}

function placeOrder(restaurantId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("order placed ...");
      resolve({ orderId: 101, item: "samosa" });
    }, 1000);
  })
}

function sendConfirmation(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("your order confirmed ...");
      resolve("your samosa is on the way");
    }, 1000);
  })
}

loginUser("test@gmail.com", "3333")
  .then((user) => {
    console.log("got user : ",user.name);
    return getLocation(user.userId);

  }).then((location) => {
    console.log("got city : ",location.city);
    return findRestaurant(location.city);

  }).then((restaurant) => {
    console.log("restaurant found :",restaurant.name);
    return placeOrder(restaurant.restaurantId);

  }).then((order) => {
    console.log("Order placed : ",order.item);
    
    return sendConfirmation(order.orderId);
  }).then((message) => {
  console.log("confirmation : ",message);
  }).catch((error) => {
  console.log("something went wrong",error);
})