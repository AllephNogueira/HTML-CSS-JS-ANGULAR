
/** Diferença de objetos para Classe
 * Repara que nesse exemplo aqui o objeto, ja temos os dados definidos nele
 * Classe é um modelo de objeto, mas que ainda nao tem os dados, vamos precisar definir eles ainda
 *  Usando por exemplo um construtor
 *  Usando por meio de um new e depois adicionando os itens.
 */

const usuario = {
    nome : 'Alleph',
    sobrenome : 'Nogueira',
    idade : 31
}
    



console.log(usuario) // IMPRIMIR TODOO O OBJETO
console.log(usuario.nome) // IMPRIMIR SOMENTE O NOME
console.log(usuario.idade) // SOMENTE IDADE

// Outra forma de acessar
console.log(usuario['nome'])

// Imagina que vem do banco de dados a informacao
const vindoDoBanco = 'idade'
// Acessando com informacao dinamica
console.log(usuario[vindoDoBanco]) // Repara que assim estamos acessando o objeto de forma dinamica.

// Podemos adicionar mais valores e remover também
    // Adicionando novo valor
usuario.profissao = 'Desenvolvedor'
usuario.localNascimento = 'São Gonçalo'

console.log(usuario)

    // Remover valores

delete usuario.localNascimento

console.log(usuario)