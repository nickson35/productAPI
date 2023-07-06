const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  company: {
    type: String,
    enum: {
      values: ["roadster", "peter england"],
      message: "this is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productScheme);
