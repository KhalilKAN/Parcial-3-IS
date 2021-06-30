const express = require("express");
const app = express();
const suma = require('./calculadora').suma;

app.get('/', function(req, res){
    res.send(String(`El resultado de la suma es: ${suma(1,2)}`));
}); 

module.exports = app;