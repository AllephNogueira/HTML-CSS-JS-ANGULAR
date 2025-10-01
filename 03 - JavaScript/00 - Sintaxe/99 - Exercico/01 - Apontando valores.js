// Desafio de troca de valores entre variáveis

let varA = 'A'; // Desejado: B
let varB = 'B'; // Desejado: C
let varC = 'C'; // Desejado: A

/**
 * Objetivo:
 * - varA deve receber o valor de varB
 * - varB deve receber o valor de varC
 * - varC deve receber o valor de varA original
 */

/**
 * Solução:
 * Armazenamos os valores originais em uma lista (array),
 * assim evitamos que os valores se percam durante a troca.
 */
const listaVariaveis = [varA, varB, varC];

/**
 * Agora fazemos a troca usando os índices do array:
 * - listaVariaveis[0] = valor original de varA
 * - listaVariaveis[1] = valor original de varB
 * - listaVariaveis[2] = valor original de varC
 */
varA = listaVariaveis[1]; // B
varB = listaVariaveis[2]; // C
varC = listaVariaveis[0]; // A

console.log(varA, varB, varC); // Resultado esperado: B C A