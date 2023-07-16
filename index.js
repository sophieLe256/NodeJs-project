import express from "express";
import route from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

route(app);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Update!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
