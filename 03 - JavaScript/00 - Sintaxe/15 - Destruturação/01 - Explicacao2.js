// Imagine que temos um array e queremos acessar seus elementos pelos índices.
// Em vez de criar uma variável para cada índice, podemos usar a desestruturação para nomear os elementos diretamente.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Aqui estamos dando "apelidos" para os primeiros índices do array.
// É como se estivéssemos dizendo: índice 0 = primeiroNumero, índice 1 = segundoNumero, etc.
const [primeiroNumero, segundoNumero, terceiroNumero] = array;

console.log(segundoNumero); // 2

// Vamos fazer o mesmo com outro array:
const nomes = ['Alleph', 'Fernanda', 'Crixus', 'Amora'];
const [primeiro, segundo, terceiro, quarto] = nomes;

console.log(terceiro); // Crixus

// Essa é uma forma mais prática do que fazer isso manualmente:
const terceiroElemento = nomes[2];
console.log(terceiroElemento); // Crixus



// Agora vamos imaginar outro exemplo com uma família
const familia = ['Alleph', 'Fernanda', 'Crixus', 'Amora'];

// Usamos desestruturação para dar nomes aos membros da família
const [pai, mae, filho, filha] = familia;

console.log(pai);   // Alleph
console.log(filha); // Amora