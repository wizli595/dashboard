const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const admin = require("../database/schemas/adminSchema");
passport.use(
  "admin-local",
  new localStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const usr = await admin.findOne({ email: email });
        if (!usr) throw new Error("admin not found");
        if (usr.email === email && usr.password === password)
          return done(null, usr);
      } catch (err) {
        return done(err);
      }
    }
  )
);
passport.serializeUser((usr, done) => {
  console.log("serializeUser admin");
  done(null, usr.id);
});
//=>return the full user and attahed to the request
passport.deserializeUser(async (id, done) => {
  try {
    const usr = await admin.findById(id);
    console.log("deserializeUser admin");
    // if (!usr) throw new Error({ message: "user not found" });
    done(null, usr);
  } catch (err) {
    done(err, null);
  }
});
