//Import Routers
var express = require("express");
const suma = require('../index');
const router = express();

//Routes
//GET: Obtener
router.get('/', function(req, res){
    document.write(suma.suma(1,2));
}); //Obtener peliculas

module.exports = router;