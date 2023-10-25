require("../strategies/adminStrategy");
const passport = require("passport");
const admin = require("../database/schemas/adminSchema");
const { Router } = require("express");
const route = new Router();
route.get("/admin/login", (req, res) => {
  res.send({ error: "not successfully!" });
});
route.get("/admin", (req, res) => {
  res.send({ success: "Logged in successfully!", user: req.user });
});
route.post(
  "/admin",
  passport.authenticate("admin-local", {
    successRedirect: "/", // Redirect to a success page on successful login
    failureRedirect: "/admine/login", // Redirect back to login page if there's an error
    failureFlash: true,
  })
);
module.exports = route;
