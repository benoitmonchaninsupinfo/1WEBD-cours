document.getElementById("theme-button").addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
