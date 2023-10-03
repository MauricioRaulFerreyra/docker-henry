const server = require("./src/server");

const port = process.env.PORT || 8001;

server.listen(port, () => {
  console.log("Characters service listening on port " + port);
});
