import passport from "passport";
import express, { Router } from "express";
import UserController from "./user.controller";

const router = Router();

router.use(passport.initialize());

// Authentication Routes
router.get(
  "/users/login",
  passport.authenticate("local", { session: false }),
  UserController.instance.read // TODO: maybe add userAuthController in addition to user controller
);

// app routes

// create new user
router.post("/users/register", UserController.instance.create);

export default router;
