const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const user = require("../database/schemas/userSchema");
const admin = require("../database/schemas/adminSchema");

//=> create the local startegy
passport.use(
  "user-local",
  new localStrategy({ usernameField: "email" }, (email, password, done) => {
    user
      .findOne({ email: email })
      .then((usr) => {
        if (!usr || usr.password !== password) {
          return done(null, false, { message: "Incorrect email" });
        }
        usr.type = "user"; // Assign user type
        return done(null, usr);
      })
      .catch((err) => {
        done(err, null);
      });
  })
);

passport.use(
  "admin-local",
  new localStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const usr = await admin.findOne({ email: email });
        if (!usr || usr.password !== password) {
          throw new Error("admin not found");
        }
        usr.type = "admin"; // Assign admin type
        return done(null, usr);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((usr, done) => {
  if (usr.type === "user") {
    done(null, "user-" + usr.id);
  } else if (usr.type === "admin") {
    done(null, "admin-" + usr.id);
  } else {
    done(new Error("Invalid user type"), null);
  }
});

passport.deserializeUser(async (idWithType, done) => {
  const [type, id] = idWithType.split("-");

  if (type === "user") {
    try {
      const usr = await user.findById(id);
      usr.type = "user";
      done(null, usr);
    } catch (err) {
      done(err, null);
    }
  } else if (type === "admin") {
    try {
      const usr = await admin.findById(id);
      usr.type = "admin";
      done(null, usr);
    } catch (err) {
      done(err, null);
    }
  } else {
    done(new Error("Invalid ID type"), null);
  }
});
