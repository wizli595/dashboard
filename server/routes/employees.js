const { Router } = require("express");
const user = require("../database/schemas/userSchema");
const route = new Router();

// fetch all users
route.get("/", (req, res) => {
  user
    .find()
    .then((usr) => res.send(usr))
    .catch((err) => res.send(err));
});
//fetch with search
route.get("/search", (req, resp) => {
  const { username, age, email } = req.query;
  const buildSearch = () => {
    const searchParams = {};
    if (username) searchParams.username = username;
    if (age) searchParams.age = age;
    if (email) searchParams.email = email;
    return searchParams;
  };
  const params = buildSearch();
  if (Object.keys(params).length === 0)
    return resp.status(400).json({
      status: "error",
      message: "At least one search parameter (name, age, email) is required.",
    });
  user
    .find(params)
    .then((usr) => resp.send(usr))
    .catch((rr) => resp.send(rr));
});

// fetch by id
route.get("/:id", (req, resp) => {
  const { id } = req.params;
  user
    .findById(id)
    .then((usr) => resp.send(usr))
    .catch((err) => resp.send(err));
});
//create user
route.post("/create", (req, resp) => {
  user
    .create(req.body)
    .then((rp) => resp.sendStatus(201))
    .catch((err) => resp.send(err));
});
// update user
route.put("/update/:id", (req, rsp) => {
  const { id } = req.params;
  const { username, email, age } = req.body;
  user
    .findByIdAndUpdate(id, {
      username: username,
      email: email,
      age: age,
    })
    .then((rs) => rsp.sendStatus(200))
    .catch((err) => console.log(err));
});
// delete user
route.delete("/delete/:id", (req, resp) => {
  const { id } = req.params;
  user
    .findByIdAndDelete(id)
    .then((rs) => resp.sendStatus(200))
    .catch((err) => console.log(err));
});
module.exports = route;
