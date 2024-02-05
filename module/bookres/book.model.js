const { Schema, model } = require("mongoose");
const bookSchema = new Schema({
  title: String,
  aurthor: { type: String, required: true },
  content: { type: String, required: true },
  createdat: { type: Number, default: Date.now() },
  updateat: { type: Number, default: Date.now() },
});
module.exports = new model("book", bookSchema);
