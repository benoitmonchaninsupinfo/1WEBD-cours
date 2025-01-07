const PROJECTS = [
  { title: "CyberVision", category: "Web", date: "2025-01-01" },
  { title: "EcoTracker", category: "Mobile", date: "2025-02-01" },
  { title: "DataForge Pro", category: "Desktop", date: "2025-03-01" },
  { title: "CloudCanvas", category: "Web", date: "2025-04-01" },
  { title: "NomadSync", category: "Mobile", date: "2025-05-01" },
  { title: "QuantumDesk", category: "Desktop", date: "2025-06-01" },
  { title: "WebMatrix", category: "Web", date: "2025-07-01" },
  { title: "PocketPulse", category: "Mobile", date: "2025-08-01" },
  { title: "VirtualVault", category: "Desktop", date: "2025-09-01" },
  { title: "PixelPort", category: "Web", date: "2025-10-01" },
];
const MAX_PROJECTS = 5;

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortTitle = document.getElementById("sort-title");
const sortCategory = document.getElementById("sort-category");
const sortDate = document.getElementById("sort-end-date");
const projectsBody = document.querySelector("#projects>tbody");

const filters = {
  title: null,
  category: null,
};

// "asc" or "desc"
const sorting = {
  title: null,
  category: null,
  date: null,
};

displayProjects();

searchInput.addEventListener("input", (event) => {
  filters.title = event.target.value;
  displayProjects();
});

categorySelect.addEventListener("change", (event) => {
  filters.category = event.target.value;
  displayProjects();
});

sortTitle.addEventListener("click", () => {
  sorting.title = getSorting(sorting.title);
  displayProjects();
  updateSortingButton(sortTitle, sorting.title);
});

sortCategory.addEventListener("click", () => {
  sorting.category = getSorting(sorting.category);
  displayProjects();
  updateSortingButton(sortCategory, sorting.category);
});

sortDate.addEventListener("click", () => {
  sorting.date = getSorting(sorting.date);
  displayProjects();
  updateSortingButton(sortDate, sorting.date);
});

function displayProjects() {
  let projects = _.filter(PROJECTS, (project) => {
    if (filters.category && project.category !== filters.category) {
      return false;
    }

    if (
      filters.title &&
      !project.title
        .toLocaleLowerCase()
        .includes(filters.title.toLocaleLowerCase())
    ) {
      return false;
    }

    return true;
  });

  projects = _.orderBy(
    projects,
    ["title", "category", "date"],
    [sorting.title, sorting.category, sorting.date]
  );

  projects = _.chunk(projects, MAX_PROJECTS)[0];

  if (!projects) {
    projectsBody.innerHTML = "<tr><td colspan='3'>Aucun résultat</td></tr>";
    return;
  }

  projectsBody.innerHTML = projects
    .map(
      (project) => `
      <tr>
        <td>${project.title}</td>
        <td>${project.category}</td>
        <td>${project.date}</td>
      </tr>
    `
    )
    .join("");
}

function getSorting(actualSorting) {
  if (!actualSorting) {
    return "asc";
  }

  if (actualSorting === "asc") {
    return "desc";
  }

  return null;
}

function updateSortingButton(sortingButton, sorting) {
  const icon = sortingButton.querySelector("img");

  if (!sorting) {
    icon.src = "icons/arrow-down-up.svg";
    return;
  }

  if (sorting === "asc") {
    icon.src = "icons/arrow-down-z-a.svg";
    return;
  }

  if (sorting === "desc") {
    icon.src = "icons/arrow-up-a-z.svg";
  }
}
