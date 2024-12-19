const unitHT = promptNumber("Entrez le prix HT (en €)");
const tva = promptNumber("Entrez le taux de TVA (en %)");
const count = promptNumber("Entrez le nombre d'articles");

const ttc = unitHT * (1 + tva / 100) * count;

console.log({ unitHT, tva, count }, ttc);

function promptNumber(message) {
  let value = parseInt(prompt(message));

  while (Number.isNaN(value)) {
    value = parseInt(
      prompt(`La valeur entrée n'est pas un nombre !\n${message}`)
    );
  }

  return value;
}
