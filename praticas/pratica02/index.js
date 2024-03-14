const express = require('express');

const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: false }));


app.get('/', function(req,res) {
    res.status(200);
    res.send('Você fez uma requisição GET');
});

app.listen(3000, function() {
  console.log('ON!');
});

module.exports = app;
