const express = require("express");
const app = express();
const suma = require(".").suma;
document.write(suma(1,3));

app.get('/', (req, res) => {
    res.send('soy el server de nodejs');
});

app.listen(3000, () => {
    console.log("OK");
})

// const arreglo = [1,2,3,4];
// for(let i = 0; i < 10; i++){
//     var result = arreglo[i]/"r";
// }

module.exports = app;
