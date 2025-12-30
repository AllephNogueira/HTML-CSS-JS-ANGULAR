// ForEach serve para a gente percorrer um array de forma mais facil

// Imprimir cada elemento
const array = [15,54,456,456,456,564,564,456,456,56]
array.forEach(numero => console.log(numero))

// Somando valores
let total = 0

array.forEach(numero =>  total += numero)
console.log(`Soma de total ${total}`)

// Com objetos
const pessoas = [
  { nome: 'Alleph', idade: 31 },
  { nome: 'Fernanda', idade: 29 },
  { nome: 'Valeria', idade: 48 }
];

pessoas.forEach((pessoa, indice) => {
  console.log(`${indice + 1} - ${pessoa.nome} tem ${pessoa.idade} anos`);
});


// Dobrando valor
// Repara que passamos um array com os numeros
// Um array vazio
// Pegamos esses numeros e adicionamos 1 a 1 dentro do novo array + dobrando eles.
const numeros = [10,20,30,40,50]
const dobrados = []

numeros.forEach(numero => {
    dobrados.push(numero *2)
})
console.log(dobrados)