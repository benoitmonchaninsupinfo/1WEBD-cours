import { select, checkbox } from "@inquirer/prompts";

async function coffeeMaker() {
  const provenance = await select({
    message: "Vous souhaitez un grain de quelle provenance ?",
    choices: [
      {
        name: "Brésil",
        value: "du Brésil",
      },
      {
        name: "Vietnam",
        value: "du Vietnam",
      },
      {
        name: "Ethiopie",
        value: "d'Ethiopie",
      },
    ],
  });

  const size = await select({
    message: "Long ou expresso ?",
    choices: [
      {
        name: "Long",
        value: "long",
      },
      {
        name: "Expresso",
        value: "expresso",
      },
    ],
  });

  const specials = await checkbox({
    message: "Souhaitez-vous ajouter des arômes spéciaux ?",
    choices: [
      {
        name: "Vanille",
        value: "vanille",
      },
      {
        name: "Noisette",
        value: "noisette",
      },
      {
        name: "Caramel",
        value: "caramel",
      },
    ],
  });

  console.log(
    `Voici votre café ${size} dont le grain vient ${provenance}${
      specials.length > 0 ? ` avec ${specials.join(", ")}` : ""
    }.`
  );
}

coffeeMaker();
