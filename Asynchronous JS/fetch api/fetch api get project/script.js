const btn = document.getElementById("btn");
const factPara = document.getElementById("fact");

const newBtn = document.getElementById("secondBtn");
const userDetails = document.getElementById("userDetails");


btn.addEventListener("click", async function () {
    factPara.textContent = "Loading fact ...";
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error("something wrong");
        }
        const data = await response.json();
        console.log(data);

        factPara.textContent = data.fact;
    } catch (error) {
        factPara.textContent = "Error : " + error.message;
    }
});

newBtn.addEventListener("click", async function () {
    userDetails.innerHTML = "<p>Details are loading ...</p>";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Error : " + response.status);
        }

        const users = await response.json();
        console.log(users);

        userDetails.textContent = "";
        
        users.forEach((user) => {
            const card = document.createElement("div");
            card.className = "user-card";

            card.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</P>
            <p>${user.address.city}</P>
            <p>${user.phone}</p>
            `
            userDetails.appendChild(card);
        });
        
    } catch (error) {
        userDetails.textContent = "Error : " + error.message;
    }
});