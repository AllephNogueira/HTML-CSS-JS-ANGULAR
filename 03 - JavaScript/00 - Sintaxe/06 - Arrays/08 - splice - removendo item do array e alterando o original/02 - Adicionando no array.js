// Imagina que queremos adicionar um item no indice 3
const array = [0,1,2,3,4,5,6,7]

// Vou adicionar um nome no indice 2
// No caso vai adicionar aonde esta o 2 e o 2 vai pular para o proximo indice

array.splice(2, 0, 'Alleph')

console.log(array)

// Agora vamos imaginar que eu queria remover o 2 e adicionar o nome nesse numero
// Sem aumentar o array
// Imagina uma sala de cinema onde eu tenho essas cadeiras e precisamos ocupar elas.
array.splice(6, 1, 'Fernanda')
console.log(array)

// Podemos fazer com mais de um também
array.splice(7, 2, 'Crixus', 'Amora')
console.log(array) // nesse exemplo estamos pegando no indice 7, removendo 2 e adicionando dois novos nomes

// Simulando o push, adicionando no final da fila
// Pegar o final da fila -1
// Quantidade de itens que queremos remover
// Nomes  que quero adicionar.
array.splice(-1, 0, 'Larissa', 'Livia')
console.log(array) 