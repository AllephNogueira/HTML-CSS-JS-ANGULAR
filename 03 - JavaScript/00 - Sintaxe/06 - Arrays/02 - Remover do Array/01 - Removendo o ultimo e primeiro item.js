const exemploDeNomes = ['Alleph', 'Fernanda', 'Crixus']

console.log(exemploDeNomes.length)

const ultimoRemovido = exemploDeNomes.pop() // Alem de remover, retornamos qual removemos

console.log(exemploDeNomes, ultimoRemovido)


// Também temos outra forma de remover, mas dessa maneira ele desloca todos os indices
// Se a gente remover o indice 0
// O indice 1 passa a ser o 0
// Para nao ficar buraco

const primeiroRemovido = exemploDeNomes.shift()
console.log(exemploDeNomes, ultimoRemovido, primeiroRemovido)