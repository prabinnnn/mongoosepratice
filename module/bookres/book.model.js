const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const bookSchema = new Schema({
  title: String,
  author: { type: ObjectId, required: true, ref: "user" },
  content: { type: String, required: true },
  createdat: { type: Number, default: Date.now() },
  updateat: { type: Number, default: Date.now() },
});

module.exports = model("Book", bookSchema);
