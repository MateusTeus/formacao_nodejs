//usando funcaoexportada
//aqui caso estivese exportando apenas a funcao soma

/*
var somaFuncao = require("./calculadora")

console.log(somaFuncao(10,30))

*/

//aqui caso exportasse variar funcoes


var calculadora = require("./calculadora")

console.log(calculadora.mult(10,5))
console.log(calculadora.name)

