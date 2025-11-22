// Aqui vamos ler os indices do array
const produtosAComprar = ['Monitor', 'Play5', 'Academia']

// Outra forma de fazer
for(let i in produtosAComprar) {
    console.log(produtosAComprar[i])
}



const pessoa = {
    nome: 'Alleph',
    sobrenome: 'Nogueira',
    idade: 30
}

// Aproveitando o gancho, existe duas maneiras de acessar pessoa
console.log(pessoa.nome)
console.log(pessoa['nome']) // maneira de acessar com uma string // Podemos usar dessa forma quando temos uma string dentro de uma variavel também
// Igual o exemplo a baixo.
console.log('_______________________________')


for (let chave in pessoa) {
    // Dessa maneira aqui estamos percorrendo as chaves do nosso objeto.
    console.log(chave) // Vai vir = nome, sobrenome, idade...
    // Entao sabemos que a chave vem esses dados, podemos fazer como o exemplo a baixo
    // O que retorna ali na chave é uma string com o nome da chave.
    console.log(pessoa[chave])
}
