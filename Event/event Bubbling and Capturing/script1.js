child.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Child clicked only");
});
