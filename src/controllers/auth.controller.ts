import bcrypt from "bcryptjs";
import passport from "passport";
import { Strategy } from "passport-local";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import User from "../models/user.model";
import { JWT_SECRET } from "../config/constants.config";

passport.use(
  new Strategy(async (username: string, password: string, done) => {
    const user = await User.findOne({ where: { email: username } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: "Incorrect credentials\nTry again" });
    }
    return done(null, { username });
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findOne({ where: { email: jwtPayload.email } });
        if (!user) {
          return done(null, false);
        }
        return done(null, user.firstName);
      } catch (err) {
        return done(err);
      }
    }
  )
);
