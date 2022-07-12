const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  id: Number,
  imgUrl:String,
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
});


const PorductModel = mongoose.model("product", ProductSchema);

module.exports = PorductModel;
