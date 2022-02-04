import passport from "passport";
import express, { Router } from "express";

const apiRouter = Router();

apiRouter.use(passport.initialize());

// TODO: add authorization middleware here

// app routes

export default apiRouter;
