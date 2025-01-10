function calculatrice() {
  const args = process.argv.slice(2);

  const operation = args[0];
  const numbers = args.slice(1).map((num) => Number(num));

  /** OU avec le spread operator et une deconstruction d'array : */
  // const [operation, ...numbers] = args;

  if (numbers.length <= 1) {
    console.log("Veuillez entrer des nombres");
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = numbers.reduce((prev, num) => prev + num, 0);
      break;
    case "sub":
      result = numbers.slice(1).reduce((prev, num) => prev - num, numbers[0]);
      break;
    case "mul":
      result = numbers.reduce((prev, num) => prev * num, 1);
      break;
    case "div":
      result = numbers.slice(1).reduce((prev, num) => prev / num, numbers[0]);
      break;
    default:
      console.log(
        "Veuillez utiliser les operateurs 'add', 'sub', 'mul' ou 'div'"
      );
  }

  if (result) {
    console.log(`Résultat : ${result}`);
  }
}

calculatrice();
