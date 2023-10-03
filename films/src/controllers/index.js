const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  createFIlms: catchedAsync(require("./createFilms")),
};
