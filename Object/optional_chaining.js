const obj1 = { name: "Ritesh", address: { city: "Jodhpur" } };

console.log(obj1.address.city);//sends error if address in undefined

//if anything is null or undefined it will returns undefined instead of error

console.log(obj1?.address?.city);