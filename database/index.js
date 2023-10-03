const server = require("./src/server");
const { PORT } = require("./src/config/envs");

const port = PORT || 8004;

server.listen(port, () => {
  console.log("Database listing on port " + port);
});
