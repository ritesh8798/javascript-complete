const form = document.getElementById("userForm");

const app = {
  users: [],

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("username").value;
    const role = document.getElementById("role").value;
    const bio = document.getElementById("bio").value;
    const photo = document.getElementById("photo").value;

    
    if (!name || !role || !bio) {
      alert("Fill all fields");
      return;
    }

    const user = { name, role, bio, photo };

    this.users.push(user);

    this.createCard(user);

  },
  createCard(user) {
    const container = document.getElementById("cardcontainer");

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src="${user.photo}" />
    <h3>${user.name}</h3>
    <p>${user.role}</p>
    <p>${user.bio}</p>
  `;
    card.addEventListener("click", this.removeCard.bind(this, card));

    container.appendChild(card);
  },
  removeCard(card) {
    card.remove();
  },
};

form.addEventListener("submit", app.handleSubmit.bind(app));
