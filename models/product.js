const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: { type: String },
  img: { type: Array, required: true },
  description: { type: String },
  size: { type: [String], required: true },
  price: { type: Number },
  company: {
    type: String,
    enum: {
      values: ["roadster", "peter england", "ramyyam", "bata"],
      message: "this is not supported",
    },
  },
  category: { type: String },
});

module.exports = mongoose.model("Product", productScheme);
