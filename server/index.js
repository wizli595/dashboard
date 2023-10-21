// all imports
require("./database/connection");
require("./strategies/localStrategy");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const flash = require("express-flash");
const user = require("./database/schemas/userSchema");

//initialize the app
const app = express();
const PORT = 3000;

//add the required middelware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // React app's url
    credentials: true, // Allow cookies to be sent with requests from the client
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: "EEHGFDZUGFHVBHNDFCDU",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.send({ error: "ur email or password is wrong " });
}
// create login and sign route
app.get("/login", checkAuthenticated, (req, resp) => {
  console.log(req.session);
  resp.send(req.session.flash);
});
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/", // Redirect to a success page on successful login.
    failureRedirect: "/login", // Redirect back to login page if there's an error.
    failureFlash: true,
  })
);
app.get("/", (req, res) => {
  res.send({ success: "Logged in successfully!", user: req.user });
});
app.get("/logout", (req, res) => {
  //   req.logout();
  req.session.destroy((err) => {
    console.log(err);
    if (!err) {
      // Handle error during session destroy
      console.error("Error destroying session:", err);
      return res.status(500).send("Server error");
    }
    // res.redirect("/login");
  });
});
app.get("/check-auth", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ isAuthenticated: true, user: req.user });
  } else {
    res.json({ isAuthenticated: false });
  }
});
// run the app
app.listen(PORT, () => {
  console.log(`my app running on port ${PORT}`);
});