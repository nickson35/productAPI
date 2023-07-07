const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: { type: String },
  img: { type: Buffer, contentType: String },
  description: { type: String },
  company: {
    type: String,
    enum: {
      values: ["roadster", "peter england"],
      message: "this is not supported",
    },
  },
  category: { type: String },
});

module.exports = mongoose.model("Product", productScheme);
