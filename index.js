require("dotenv").config();
const express = require("express");
const app = express();
const PORT = Number(process.env.PORT);
const mongoose = require("mongoose");
const morgan = require("morgan");
const indexofrouter = require("./routes");
app.use(morgan("dev"));
app.use("/", indexofrouter);
app.use(express.json());
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something is missing";
  res.status(500).json({ msg: err });
});
app.listen(PORT, () => {
  console.log("app is runing");
});
