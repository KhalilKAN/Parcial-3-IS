const assert = require("chai").assert;
const calculadora = require("../index");

const result = calculadora.suma(1,3);

describe("Test Calculadora", function(){
    it("Test funcion suma", function(){
        assert.equal(result, 4);
    });
});

