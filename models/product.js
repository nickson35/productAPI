const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  brand: {
    type: String,
    enum: {
      values: ["roadster", "banaras"],
      message: "this is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productScheme);
