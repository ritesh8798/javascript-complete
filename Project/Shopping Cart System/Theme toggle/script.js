// Get saved theme
const savedTheme = localStorage.getItem("theme");

// Apply theme function
function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
}

// Detect system theme
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Initial load
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme(getSystemTheme());
}

// Toggle button
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// System theme change (only if user hasn't selected manually)
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
      applyTheme(getSystemTheme());
    }
  });
