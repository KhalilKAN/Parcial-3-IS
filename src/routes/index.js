const express = require("express");
const suma = require('../index');
const router = express();

router.get('/', function(req, res){
    document.write(suma.suma(1,2));
});

module.exports = router;