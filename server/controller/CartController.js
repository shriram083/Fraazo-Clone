const { Router } = require("express");
const CartModel = require("./Models/Cart.model");

const CartController = Router();

CartController.get("/", async (req, res) => {
  try {
    const cartItems = await CartModel.find().lean().exec();
    res.status(200).send(cartItems);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// add single item
CartController.post("/add", async (req, res) => {
  try {
    const cartItem = await new CartModel(req.body);
    await cartItem.save();
    // console.log(cartItem);
    res.status(200).send(cartItem);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
// update single item count
CartController.patch("/:id", async (req, res) => {
  // res.send(req.body);
  try {
    await CartModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .lean()
      .exec();
    const cartItem = await CartModel.findOne({ _id: req.params.id });
    res.status(200).send(cartItem);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// delete single item
CartController.delete("/:id", async (req, res) => {
  try {
    const find = await CartModel.find({ _id: req.params.id }).lean().exec();
    if (find.length) {
      const cartItem = await CartModel.findOneAndDelete({ _id: req.params.id })
        .lean()
        .exec();
      res.status(200).send(cartItem);
    } else {
      res.status(404).send("Item not found");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = CartController;
