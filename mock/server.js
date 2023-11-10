const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom POST route for /login
server.post("/login", (req, res) => {
  const users = router.db.get("users").value();
  const firstUser = users[0];
  res.json(firstUser);
});

server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running in http://localhost:${port}`);
});
