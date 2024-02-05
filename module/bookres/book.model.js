const { date } = require("joi");
const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const bookSchema = new Schema({
  title: String,
  author: { type: ObjectId, required: true, ref: "user" },
  content: { type: String, required: true },
  page: { type: Number },
  createdat: { type: Date, default: Date.now() },
  updateat: { type: Date, default: Date.now() },
});

module.exports = model("Book", bookSchema);
