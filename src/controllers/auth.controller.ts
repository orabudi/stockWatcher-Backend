import bcrypt from "bcryptjs";
import passport from "passport";
import { Strategy } from "passport-local";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";

passport.use(
  new Strategy(async (username: string, password: string, done) => {
    const user = null; // TODO: get user from DB by sequelize
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: "Incorrect credentials\nTry again" });
    }
    return done(null, { username });
  })
);

passport.use(
  new JWTStrategy(
    {
      requestJWT: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = null; // TODO: get user from DB by Sequelize
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
