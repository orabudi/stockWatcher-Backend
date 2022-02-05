import dotenv from "dotenv";
import express, { NextFunction } from "express";
import Logger from "./utils/logger";
import logMiddleware from "./utils/logMiddleware";
import Helmet from "helmet";
import appCors from "./utils/cors";
import { Client } from "pg";
import router from "./controllers/api.controller";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(appCors);

if (process.env.NODE_ENV === "production") {
  app.use(Helmet());
}

app.use(logMiddleware);

app.listen(port, () => {
  return Logger.info(`Express is listening at http://localhost:${port}`);
});

app.use("/", router);

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
