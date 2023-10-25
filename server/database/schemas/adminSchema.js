const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.SchemaTypes.String,
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
const AdminModel = mongoose.model("admin", AdminSchema);
module.exports = AdminModel;
