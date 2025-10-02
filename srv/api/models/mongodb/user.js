const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  USERID: String,
  USERNAME: String,
});

module.exports = mongoose.model("USER", userSchema, "USER");
