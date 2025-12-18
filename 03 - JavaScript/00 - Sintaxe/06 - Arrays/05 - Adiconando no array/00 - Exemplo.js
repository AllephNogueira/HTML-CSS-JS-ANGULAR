// Adicionando no final
const array = []

array.push('Alleph') // No final
array.unshift('Fernanda') // No inicio

/** Atenção
 * Imagina um array com 10 mil elementos e voce adiciona um item no inicio
 * Ele vai deslocar todos os outros indices, com isso podemos ter problemas de performace no sistema.
 * Nao é recomandado fazer isso.
 */