const mongoose = require("mongoose");
const mongodb_url = process.env.MONGODB_URL;
//MONGODB_URL = mongodb://127.0.0.1:27017/fraazo
const connection = mongoose.connect(mongodb_url);

module.exports = connection;
