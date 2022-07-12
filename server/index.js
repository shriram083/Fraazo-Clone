const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connection = require("./db");
const FraazoController = require("./controller/FraazoController");
const CartController = require("./controller/CartController");
const PORT = process.env.PORT || 5000;


const app = express();

app.use(cors());
app.use(express.json());


app.use("/fraazo", FraazoController);
app.use("/cartItems", CartController);


app.get("/",(req,res)=>{
    // console.log("after fraazo controller");
    res.send("Welcome to fraazo backend home page")
})

app.listen(PORT, async ()=>{
    try{
        await connection;
    }catch{
        console.log("Something went wrong while connecting to db");
    }

    console.log(`Server  listening on port ${PORT}`);
});
