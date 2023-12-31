require("../strategies/localStrategy");
const passport = require("passport");
const user = require("../database/schemas/userSchema");
const { Router } = require("express");
const route = new Router();
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.send({ error: "somthinsg went wrong " });
}
function checkForAdmin(req, res, next) {
  if (req.body.email === "admin" && req.body.password === "admin") {
    return passport.authenticate("admin-local", {
      successRedirect: "/admin",
      failureRedirect: "/admin/login",
      failureFlash: true,
    })(req, res, next);
  }
  next();
}
// create routes
//=>this route it just for checking or sending flash error
route.get("/login", (req, resp) => {
  console.log(req.body);
  return resp.send(req.session.flash);
});
//=> confirm the success loging
route.get("/", (req, res) => {
  console.log("hh");
  res.send({ success: "Logged in successfully!", user: req.user });
});
//=> the main loging route uses the local stratgy in passport
route.post(
  "/login",
  checkForAdmin,
  passport.authenticate("user-local", {
    successRedirect: "/", // Redirect to a success page on successful login
    failureRedirect: "/login", // Redirect back to login page if there's an error
    failureFlash: true,
  })
);

//=> logout route
route.get("/logout", (req, res) => {
  //   req.logout();
  req.session.destroy((err) => {
    // console.log(err);
    if (!err) {
      // Handle error during session destroy
      return res.status(500).send("u logout successfully");
    }
    return console.error("Error destroying session:", err);
    // res.redirect("/login");
  });
});
//=> check the auth every time the client uses the route
route.get("/check-auth", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ isAuthenticated: true, user: req.user });
  } else {
    res.json({ isAuthenticated: false });
  }
});
//=>sgin route
route.post("/register", (req, resp) => {
  user
    .create(req.body)
    .then((res) => {
      return resp.send({ success: "your acc is successfully Created!" });
    })
    .catch((err) => {
      return resp.send({ error: "there's somthing wrong!" });
    });
});
//=> get a user but only if you autentacated
route.get("/user/:id", checkAuthenticated, (req, resp) => {
  const { id } = req.params;
  user
    .findById(id)
    .then((res) => {
      return resp.send(res);
    })
    .catch((err) => {
      return resp.send({ message: "there's somthing wrong!", error: err });
    });
});
module.exports = route;
