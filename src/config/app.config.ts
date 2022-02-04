import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 3000,
  environment: process.env.NODE_ENV || "development",
  dbUser: <string>process.env.DB_USERNAME,
  DBPassword: process.env.DB_PASSWORD,
  DBHost: process.env.DB_HOST,
  DBName: process.env.DB_DATABASE,
  DBPort: Number(process.env.DB_PORT),
  DBDialect: process.env.DB_DIALECT,
};

export const sequelize = new Sequelize(
  "postgres",
  config.dbUser,
  config.DBPassword,
  {
    host: config.DBHost,
    port: config.DBPort,
    dialect: "postgres",
    define: { timestamps: false },
  }
);
