const planets = require("./planets.json");

module.exports = {
  list: () => {
    return planets;
  },
  create: async () => {
    throw Error("Hay un error en la BDD al momento de crear un planets");
  },
};
