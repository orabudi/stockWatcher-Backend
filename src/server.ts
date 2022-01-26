import dotenv from "dotenv";
import express from "express";
import Logger from "./utils/logger";
import logMiddleware from "./utils/logMiddleware";
import Helmet from "helmet";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(Helmet());
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return Logger.info(`Express is listening at http://localhost:${port}`);
});
