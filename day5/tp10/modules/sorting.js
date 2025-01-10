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

export { getSorting, updateSortingButton };
