let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.innerText = task;

  list.appendChild(li);

  input.value = "";
});

list.addEventListener("click", (e) => {
  e.target.remove();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});