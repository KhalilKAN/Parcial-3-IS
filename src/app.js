let express = require('express');

let app1 = express();
app1.disable("x-powered-by");

const suma = require('./calculadora').suma;

let helmet = require("helmet");
let app2 = express()
app2.use(helmet.hidePoweredBy());

app2.get('/', function(req, res){
    res.send(String(suma(1,2)));
}); 

module.exports = app2;