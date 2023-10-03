const server = require("./src/server");

const port = process.env.PORT || 8002;

server.listen(port, () => {
  console.log("Films service listening on port " + port);
});
