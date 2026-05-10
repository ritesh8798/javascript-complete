document.getElementById("container").addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    // sab buttons reset
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.style.background = "";
    });

    // clicked button highlight
      e.target.style.background = "linear-gradient(45deg, #00c6ff, #0072ff)";
      alert("You clicked: " + e.target.innerText);
  }
});
