const server = require("./src/server");

const port = process.env.PORT || 8003;

server.listen(port, () => {
  console.log("Planets service listening on port " + port);
});
