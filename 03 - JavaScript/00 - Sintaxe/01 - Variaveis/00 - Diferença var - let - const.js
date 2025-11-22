/** Se você reparar aqui estamos redeclarando uma variavel
 * Mas com var isso não vai gerar erros.
 * É como se fosse uma unica variavel
 * Vai contar o ultimo dado que colocamos nela
 */

var nome = 'Alleph';
var nome = 'Fernanda'
console.log(nome)

/** Agora com let isso gera erro, não podemos fazer isso */

let sobrenome = 'Nogueira'
//let sobrenome = 'Ferreira' == ERRO
sobrenome = 'Ferreira' // Maneira correta de redeclarar.
console.log(sobrenome) 


/** Outra forma de fazer, mas NÃO É INDICADO
 * Isso vai gerar uma variavel global e pode afetar o uso de outras variaveis
 * Devemos sempre criar usando o nome na frente const - let - var.
 */

nome = 'Alleph'
console.log(nome)
