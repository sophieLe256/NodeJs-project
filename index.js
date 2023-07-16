const express = require("express");
const route = require("./src/routes");
const app = express();
const port = 3000;

route(app);

app.get("/", (req, res) => {
  res.send("Hello World from Update!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
