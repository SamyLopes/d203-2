/*
function NOME (ARGUMENTO, ARGUMENTO, ARGUMENTO, ARGUMENTO) {
    EXECUÇÃO
}
*/

let primeiroValor = Number(prompt('Qual o primeiro valor para a soma'))
function somaElevadaAoQuadrado(a = 0, b = 0) { //assinatura da função
    let soma = a + b;

    return soma ** 2;

}

console.log(somaElevadaAoQuadrado(10, 10));

/*function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}*/

const aleatorio = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) +
    min;
}