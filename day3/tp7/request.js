const button = document.getElementById("fetch-data");
button.addEventListener("click", fetchingData);

const dataList = document.getElementById("data");
const error = document.getElementById("error");

const errors = document.getElementById("errors-count");
let errorsCount = 0;

function fetchSimulatedData() {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 3000 + 1000;
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(["Donnée 1", "Donnée 2", "Donnée 3"]);
      } else {
        reject("Erreur : Impossible de récupérer les données.");
      }
    }, delay);
  });
}

/** THEN et CATCH **/
// function fetchingData() {
//   fetchSimulatedData()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

/** ASYNC et AWAIT **/
async function fetchingData() {
  try {
    button.setAttribute("disabled", true);
    dataList.innerText = "Chargement...";
    error.innerText = "";

    const response = await fetchSimulatedData();

    dataList.innerHTML = "";
    response.forEach((item) => {
      dataList.innerHTML += `<li>${item}</li>`;
    });
  } catch (e) {
    errorsCount++;
    errors.innerText = errorsCount;
    error.innerText = e;
    dataList.innerText = "";
  } finally {
    button.removeAttribute("disabled");
  }
}
