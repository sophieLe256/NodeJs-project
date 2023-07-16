import express from "express";
import route from "./routes/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

app.get("/", (req, res) => {
  res.send("Hello World from Update!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
