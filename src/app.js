const express = require("express");
const app = express();
const suma = require("./calculadora").suma;
document.write(suma(1,3));

app.get('/', (req, res) => {
    res.send('soy el server de nodejs');
});

app.listen(3000, () => {
    console.log("OK");
})


module.exports = app;
