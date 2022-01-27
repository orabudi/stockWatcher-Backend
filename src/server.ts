import dotenv from "dotenv";
import express from "express";
import Logger from "./utils/logger";
import logMiddleware from "./utils/logMiddleware";
import Helmet from "helmet";
import appCors from "./utils/cors";
import { Client } from "pg";

import userRouter from "./routes/user.route";
import stockRouter from "./routes/stock.route";
import { logger } from "express-winston";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(appCors);
app.use(Helmet());
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return Logger.info(`Express is listening at http://localhost:${port}`);
});

app.use("/user", userRouter);
app.use("/stock", stockRouter);

const DBClient = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

DBClient.connect((err) => {
  if (err) {
    Logger.error("error while connecting to DB");
  } else {
    Logger.info("connected to DB successfully");
  }
});
