const express = require('express');

const app = express();

const routerProdutos = require('./router.js');

app.use(express.json());

app.use('/', routerProdutos);

app.use(express.urlencoded({ extended: false }));


app.get("/produtos", function(req, res){
  res.status(200).json("Ola"); 
});

app.listen(3000, function() {
  console.log("ON!");
});

module.exports = app;