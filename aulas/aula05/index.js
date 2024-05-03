require("dotenv").config();

const mongoose = require("mongoose");
const Produto = require("./model");

const url = process.env.MONGODB_URL;

async function main() {
  try {
    await mongoose.connect(url);
    console.log("connected");
  } catch (err) {
    console.log("Erro: ", err.message);
  }

  //const product = new Produto({
  //   name:"Banana",
  //   price: 12.0,
  //  amount: 5
  // });

  // await product.save();

  const product = await Produto.findOne({name:"banana"});

  product.name = "apple";
  product.price = 20.5;
  product.amount = 10;

  await product.save();

  console.log(product._id);

  await mongoose.disconnect();
}

main();
