/**
 * O objeto Math em JavaScript fornece funções e constantes matemáticas. Ele não é uma função construtora, ou seja, não pode ser instanciado.
 A tradução de "Math" é "Matemática"
 */

/**
 * Math.PI: Retorna o valor de π (pi).
    Math.random(): Retorna um número aleatório entre 0 e 1.
    Math.round(x): Arredonda o número x para o inteiro mais próximo.
    Math.max(a, b, c): Retorna o maior valor entre os argumentos.
    Math.sqrt(x): Retorna a raiz quadrada de x.
 */

console.log(Math.PI);           // 3.141592653589793
console.log(Math.random());     // Exemplo: 0.456789
console.log(Math.round(4.7));  // 5
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.sqrt(16));    // 4


// Exemplo de array com 10 números
const numeros = [12, 5, 8, 21, 7, 3, 15, 9, 18, 2];

// Usando Math.max com spread para encontrar o maior valor
/**
 * O operador spread (...) em JavaScript serve para "espalhar" os elementos de um array (ou objeto) individualmente.
 No exemplo Math.max(...numeros), o spread transforma o array numeros em uma lista de  argumentos, permitindo que Math.max compare cada número separadamente.
 */
console.log(Math.max(...numeros)); // 21

/**
 * Arredondando numeros com o Math (Matematica)
 */

const numero1 = 9.47
console.log(Math.floor(numero1)) // Para baixo...
console.log(Math.ceil(numero1)) // Para cima
