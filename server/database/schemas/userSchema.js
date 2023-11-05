const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    age: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    createdAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date(),
    },
  },
  { versionKey: false }
);
const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
