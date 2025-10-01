/**
 * O que é uma variável undefined?
 * É uma variável que foi declarada, mas ainda não recebeu nenhum valor.
 * Ela existe na memória, mas seu conteúdo é "indefinido".
 */


let nomeUsuario; 
console.log(nomeUsuario)

/**
 * O que é null?
 * É um valor especial que representa a ausência intencional de qualquer valor.
 * Diferente de undefined (que é automático quando não atribuímos nada),
 * usamos null quando queremos "zerar" ou "limpar" uma variável manualmente.
 */

let senha = 123456; // valor inicial atribuído
console.log(senha); // saída: 123456

senha = null; // aqui estamos limpando a variável, como se apagássemos a senha
console.log(senha); // saída: null