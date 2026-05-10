const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  output.innerText = "Clicked";
});

btn.addEventListener("dblclick", () => {
  output.innerText = "Double Clicked";
});

btn.addEventListener("mouseover", () => {
  output.innerText = "Mouse Over";
});

btn.addEventListener("mouseout", () => {
  output.innerText = "Mouse Out";
});
