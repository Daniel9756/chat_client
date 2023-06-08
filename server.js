const http = require("http");
const port = 5500;
const app = require("./src/app");
const server = http.createServer(app);

server.listen(() => {
  console.log("server is running on port, steadly by nodemom", port);
});
