import express, { Router } from "express";

const stockRouter = express.Router();

stockRouter.get("/", (req, res) => {
  res.status(200).send("RETURN STOCK DATA");
});

export default stockRouter;
