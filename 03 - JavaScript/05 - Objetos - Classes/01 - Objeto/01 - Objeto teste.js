const usuario = {
    nome : 'Alleph',
    sobrenome : 'Nogueira',
    idade : 31
}
    



console.log(usuario) // IMPRIMIR TODO O OBJETO
console.log(usuario.nome) // IMPRIMIR SOMENTE O NOME
console.log(usuario.idade) // SOMENTE IDADE

// Podemos adicionar mais valores e remover também
    // Adicionando novo valor
usuario.profissao = 'Desenvolvedor'
usuario.localNascimento = 'São Gonçalo'

console.log(usuario)

    // Remover valores

delete usuario.localNascimento

console.log(usuario)