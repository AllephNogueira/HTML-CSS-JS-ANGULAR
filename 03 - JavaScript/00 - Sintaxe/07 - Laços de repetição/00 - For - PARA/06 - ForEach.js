// Aqui podemos simplificar mais ainda

const nomes = ['Alleph', 'Fernanda', 'Crixus', 'Amora']


nomes.forEach(function(nome) {
    console.log(nome)
})

console.log('##################')
// Chamamos o nome
// Passamos um for dentro dele
// Usamos uma funçao anonima com o parametro nome
// Imprimimos cada um dos nomes
nomes.forEach( (nome) => {
    console.log(nome)
} )

console.log('##################')
// Outra maneira com mais de um paramtro
// Se voce reparar no forEach sempre o primeiro parametro é o valor e o segundo é o indice
// O terceiro é o array completo
// O quarto nao existe
nomes.forEach( (valor, indice, arrayCompleto, naoExisteUndefined) => {
    console.log(valor, indice, arrayCompleto, naoExisteUndefined)
} )
