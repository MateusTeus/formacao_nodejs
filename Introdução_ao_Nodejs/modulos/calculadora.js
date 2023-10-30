// modulo sao pedacos dos seus projetos
var nome = "Mateus"
function soma(a,b){
    return a + b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

//vou exportar a funcao para usar esta  funcao em outros arquivos

module.exports = soma;


//ou multiplas

module.exports = {
    soma,
    mult,
    div,
    nome
}
