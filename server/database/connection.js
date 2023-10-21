const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/dashboard", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((rs) => console.log("DB connected"))
  .catch((err) => console.log(err));
