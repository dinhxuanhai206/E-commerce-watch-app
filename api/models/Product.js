const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String },
    categories: { type: Array },
    color: { type: String },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    thickness: { type: String, required: true },
    Move: { type: String, required: true },
    Material: { type: String, required: true },
    Strap: { type: String, required: true },
    SwapStraps: { type: String, required: true },
    Waterproof: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
