const { Router } = require("express");
const PorductModel = require("./Models/Fraazo.model");

const FraazoController = Router();

// get all products
FraazoController.get("/", async (req, res) => {
  try {
    const products = await PorductModel.find().lean().exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// get one product by id
FraazoController.get("/:_id", async (req, res) => {
  try {
    let product;
    if (req.params._id.length > 4) {
      product = await PorductModel.find(req.params).lean().exec();
    } else {
      product = await PorductModel.find({ id: req.params._id }).lean().exec();
    }
    if (product.length == 0) {
      return res.status(404).send(product);
    } else {
      return res.status(200).send(product[0]);
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// get products by Catagory
FraazoController.get("/category/:cat", async (req, res) => {
  //   console.log(req.params.cat);
  try {
    const products = await PorductModel.find({ category: req.params.cat })
      .lean()
      .exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// get products by subCatagory
FraazoController.get("/subCatagory/:sub", async (req, res) => {
  //   console.log(req.params.sub);
  try {
    const products = await PorductModel.find({ subCatagory: req.params.sub })
      .lean()
      .exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// add one product
FraazoController.post("/add", async (req, res) => {
  console.log(req.body);
  const product = await new PorductModel(req.body);
  await product.save();
  res.send(product);
});

// // add all product
// FraazoController.post("/addall", async (req, res) => {
//   // res.send(req.body);
//   for (let i = 0; i < req.body.length; i++) {
//     const product = await new PorductModel(req.body[i]);
//     await product.save();
//   }
//   res.send("All items added");
// });

// search functionality

FraazoController.get("/products/search", async (req, res) => {
  try {
    let result = await PorductModel.aggregate([
      {
        $search: {
          autocomplete: {
            query: `${req.query.q}`,
            path: "name",
            fuzzy: {
              maxEdits: 2,
              prefixLength: 3,
            },
          },
        },
      },
    ]);
    // .toArray();
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = FraazoController;
