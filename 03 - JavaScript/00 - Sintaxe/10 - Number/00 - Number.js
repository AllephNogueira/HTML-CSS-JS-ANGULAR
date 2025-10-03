let numero1 = 500.8879897789;
let numero2 = 2.5;


console.log(numero1 + numero2) // OUT: 7

/**
 * Convertendo numero para String
 */

console.log(numero1.toString() + numero2) // OUT: 52.5

/**
 * Pegando a versao binaria do numero
 */

console.log(numero1.toString(2))

/** 
 * Arredondando um numero
 */

console.log(numero1.toFixed(2)) // Pegando duas casas decimais.

/** 
 * Checando para ver se esta voltando um numero inteiro
 */

console.log(Number.isInteger(numero1)) // False

/**
 * NaN
 * Sabemos que se somar um numero com uma string retonar um Não é um Numero
 * Mas podemos verificar para saber se é um numero verdadeiro antes de processar
 */

let temporario = 10 + 5
// Aqui ele pergunta se esse valor é do tipo Number == Verdadeiro
// E && é do tipo NaN = Falso
// Verdade com falso === falso
// Aqui estamos fazendo duas verificações, mas podemos fazer apenas uma por vez.
console.log(Number.isNaN(temporario)) // False

temporario = 10 + 5
console.log(isNaN(temporario)) // Falso

temporario = 10 + 'teste'
console.log(isNaN(temporario)) // Verdadeiro

temporario = 10 + 10
console.log(Number(temporario)) // Verdadeiro pq é do tipo numero

