// Imagina que temos um array dentro de outro array
// Se a gente reparar temos um array
// Com outros 3 arrays dentro
//                  0       1           2 // Arrays
//                 0 1 2    0 1 2    0 1 2
const numeros = [ [1,2,3], [4,5,6], [7,8,9] ]

// Agora vamos acessar o array 2 com o indice 1

console.log(numeros[2][1]) // 8
// Aqui retornamos 8 
// Porque estamos acessando o array 2 que tem os elementos 7 8 e 9
// E estamos acessando o indice 1 que tem o elemento 8


// Agora imagina que estamos destruturando isso
// Pulei o primeiro array, e pulei 2 indices do segundo

const numero = [,[,,seis]] = numeros
console.log(seis)
