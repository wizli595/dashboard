const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const user = require("../database/schemas/userSchema");
passport.use(
  new localStrategy({ usernameField: "email" }, (email, password, done) => {
    user
      .findOne({ email: email })
      .then((usr) => {
        if (!usr || usr.password !== password) {
          return done(null, false, { message: "Incorrect email" });
        }
        return done(null, usr);
      })
      .catch((err) => done(err, null));
  })
);
passport.serializeUser((usr, done) => {
  console.log("hhhhh");
  done(null, usr.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const usr = await user.findById(id);
    console.log(6666);
    // if (!usr) throw new Error({ message: "user not found" });
    done(null, usr);
  } catch (err) {
    done(err, null);
  }
});
