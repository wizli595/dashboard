require("../strategies/localStrategy");
const passport = require("passport");
const admin = require("../database/schemas/adminSchema");
const { Router } = require("express");
const route = new Router();
const isAdmin = require("../helpers/isAdmin");
const adminLoginMiddleware = passport.authenticate("admin-local", {
  successRedirect: "/admin",
  failureRedirect: "/admin/login",
  failureFlash: true,
});
route.get("/admin/login", (req, res) => {
  res.send({ error: "not successfully§§!" });
});
route.get("/admin", (req, res) => {
  // console.log(req);
  res.send({ success: "Loggeds in successfully!", user: req.user });
});
//=>check
route.get("/admin/checkAut", isAdmin, (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ isAuthenticated: true, admin: req.user });
  } else {
    res.json({ isAuthenticated: false });
  }
});
// route.post("/admin/login", adminLoginMiddleware);
module.exports = {
  adminRoute: route,
  adminLoginMiddleware: adminLoginMiddleware,
};
