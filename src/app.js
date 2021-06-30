// const express = require("express");
// const app = express();
// const suma = require('./calculadora').suma;

// app.get('/', function(req, res){
//     res.send(String(suma(1,2)));
// }); 

// module.exports = app;


let express = require('express');

let app1 = express();  // Compliant
app1.disable("x-powered-by");

const suma = require('./calculadora').suma;

let helmet = require("helmet");
let app2 = express(); // Compliant
app2.use(helmet.hidePoweredBy());

app2.get('/', function(req, res){
    res.send(String(suma(1,2)));
}); 

module.exports = app2;