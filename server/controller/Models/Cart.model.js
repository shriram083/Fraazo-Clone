const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  _productId: String,
  productId: Number,
  imgUrl: String,
  name: String,
  packSize: String,
  price: Number,
  strikePrice: Number,
  soldOut: String,
  notifyme: String,
  category: String,
  subCatagory: String,
  tooltipText: String,
  benefits: String,
  description: String,
  info: String,
  createdAt: String,
  count: Number,
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;
