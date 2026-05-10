const buttons = document.querySelectorAll(".button");
const body = document.body;

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});