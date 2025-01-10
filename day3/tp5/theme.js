const DEFAULT_THEME = "light";

document.getElementById("theme-button").addEventListener("click", toggleTheme);

const theme = localStorage.getItem("theme");
updateTheme(theme);

function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    updateTheme("light");
  } else {
    updateTheme("dark");
  }
}

function updateTheme(theme) {
  document.body.classList.remove("dark");
  document.body.classList.remove("light");

  const newTheme = theme || DEFAULT_THEME;
  document.body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
}

const notesTextarea = document.getElementById("notes");
notesTextarea.addEventListener("input", (e) => {
  localStorage.setItem("notes", e.target.value);
});

notesTextarea.value = localStorage.getItem("notes");
