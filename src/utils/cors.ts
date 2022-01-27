import cors from "cors";

const allowedOrigins = [];
if (process.env.NODE_ENV === "development") {
  allowedOrigins.push("http://localhost:4200");
  allowedOrigins.push("https://localhost:4200");
  allowedOrigins.push("http://localhost:3000");
  allowedOrigins.push("https://localhost:3000");
}

const allowedMethods = ["GET", "PUT", "POST", "HEAD", "DELETE"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: allowedMethods,
};

const appCors = cors(options);

export default appCors;
