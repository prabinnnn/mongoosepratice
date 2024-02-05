const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: String,
  email: String,
  birth_year: Number,
  phoneno: String,
  createdat: { type: Date, default: Date.now() },
  updateat: { type: Date, default: Date.now() },
});
module.exports = new model("user", userSchema);
