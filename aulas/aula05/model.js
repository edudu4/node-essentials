const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    name:String,
    price:Number,
    amount:Number,
});

module.exports = mongoose.model("Produto",produtoSchema);