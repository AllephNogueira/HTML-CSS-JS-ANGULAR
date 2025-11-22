// Imagina que temos um array e precisamos acessar seus indices
// Em vez de jogar em variaveis, podemos chamar seus indices por nome

const array = [1,2,3,4,5,6,7,8,9,10];
// aqui vamos ter os indices, é como se a gente tivesse dando apeledido para os indices
//          0                1             2        // Nome do array onde vamos puxar esses indices
// A variavel é o nome do array onde vamos puxar esses indices.
const [primeiroNumero, segundoNumero, terceiroNumero] = array


console.log(segundoNumero) // 2


// Vamos fazer ao contrario agora
const nomes = ['Alleph', 'Fernanda', 'Crixus', 'Amora'];
const         [primeiro, segundo, terceiro, quarto] = nomes
console.log(terceiro) // Crixus

// Essa é a maneira mais facil, é como se a gente tivesse fazendo isso
// Rapara que se a gente tivesse fazendo com variavel, a gente teria que criar uma variavel para cada item.
const terceiroElemento = nomes[2]
console.log(terceiroElemento)