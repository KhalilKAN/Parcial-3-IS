const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('soy el server de nodejs');
});

app.listen(3000, () => {
    console.log("OK");
})
