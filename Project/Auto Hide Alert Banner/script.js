const alertBox = document.getElementById("alertBox");
const showBtn = document.getElementById("showBtn");
const closeBtn = document.getElementById("closeBtn");

let timeout; // auto-hide control

// SHOW ALERT
showBtn.addEventListener("click", () => {
  alertBox.classList.add("show");

  // pehle wala timeout clear karo (important)
  clearTimeout(timeout);

  // auto hide after 3 sec
  timeout = setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
});

// CLOSE BUTTON
closeBtn.addEventListener("click", () => {
  alertBox.classList.remove("show");

  // timeout bhi clear kar do
  clearTimeout(timeout);
});