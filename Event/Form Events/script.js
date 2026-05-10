const form = document.getElementById("form");
const nameInput = document.getElementById("name");

nameInput.addEventListener("focus", () => {
  console.log("Input focused");
});

nameInput.addEventListener("blur", () => {
  console.log("Input left");
});

nameInput.addEventListener("input", () => {
    console.log("Typing:", nameInput.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
});