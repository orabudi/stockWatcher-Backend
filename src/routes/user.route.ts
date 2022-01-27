import express, { Router } from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).send("RETURN USER DATA + JWT");
});

export default userRouter;
