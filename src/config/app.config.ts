import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 3000,
  environment: process.env.NODE_ENV || "development",
  dbUser: process.env.DB_USERNAME,
  DBPassword: process.env.DB_PASSWORD,
  DBHost: process.env.DB_HOST,
  DBName: process.env.DB_DATABASE,
  DBPort: process.env.DB_PORT,
};
