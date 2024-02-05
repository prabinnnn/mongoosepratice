const { Schema, model } = require("mongoose");
const bookSchema = new Schema({
  title: { type: String, required: true },
});
module.exports = new model("book", bookSchema);
