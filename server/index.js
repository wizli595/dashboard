// all imports
require("./database/connection");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const flash = require("express-flash");

const userRoute = require("./routes/userRoute");
const employeRoute = require("./routes/employees");
const { adminRoute } = require("./routes/adminRoute");
const isAdmin = require("./helpers/isAdmin");
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
// initialize passport as a middelware
app.use(passport.initialize());
app.use(passport.session());
//error messages handler
app.use(flash());
// use the routes
app.use("/", userRoute);
app.use("/", adminRoute);
app.use("/employee", isAdmin, employeRoute);

// run the app
app.listen(PORT, () => {
  console.log(`my app running on port ${PORT}`);
});
