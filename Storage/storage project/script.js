function toggleTheme() {
  const current = localStorage.getItem("theme");
  console.log("Current theme:", current);

  if (current === "dark") {
    localStorage.setItem("theme", "light");
    document.body.style.background = "white";
    console.log("Switched to LIGHT mode...");
  } else {
    localStorage.setItem("theme", "dark");
    document.body.style.background = "black";
    console.log("Switched to DARK mode...");
  }
}

function applySavedTheme() {
  const theme = localStorage.getItem("theme");
  console.log("Saved theme on load:", theme);

  if (theme === "dark") {
    document.body.style.background = "black";
  }
}

applySavedTheme();
