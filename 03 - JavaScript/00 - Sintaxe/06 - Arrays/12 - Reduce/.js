/*
🧩 O que o reduce faz
- É um método de arrays do JavaScript.
- Ele percorre todos os elementos de um array e os reduz a um único valor.
- Você fornece uma função de callback que combina os valores passo a passo.

⚙️ Sintaxe
array.reduce((acumulador, valorAtual, índice, array) => {
  // lógica para combinar os valores
}, valorInicial);


- acumulador → o resultado parcial que vai sendo construído
- valorAtual → o elemento atual do array
- índice → posição do elemento atual
- array → o array original
- valorInicial → valor inicial do acumulador (opcional)

📊 Exemplos
1. Somar números
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acc, curr) => acc + curr, 0);
console.log(soma); // 10


2. Achatar (flatten) um array
const aninhado = [[1, 2], [3, 4], [5]];
const plano = aninhado.reduce((acc, curr) => acc.concat(curr), []);
console.log(plano); // [1, 2, 3, 4, 5]


3. Contar ocorrências
const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];
const contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
console.log(contagem);
// { maçã: 3, banana: 2, laranja: 1 }



🎯 Quando usar reduce
- Quando você precisa transformar um array em um único resultado (número, objeto, string etc.).
- É mais poderoso que map ou filter, pois pode replicar ambos.

*/

const numeros = [10, 5, 2, 4, 45, 54, 8, 78, 87, 54, 4, 87, 87]

// Nesse exemplo imagina que queremos reduzir todo o array a um valor só
// O acumulador é onde vamos acumular 
// O valor é o valor dentro de cada indice
const total = numeros.reduce(function (acumulador, valor) {
    acumulador += valor // Juntando o valor dentro
    return acumulador // Retornando o valor acumulado
}, 0); // Valor inicial que queremos que inicie o acumulador

console.log(total)

// Retornando os valores pares e adicionando dentro de um array
const valoresPares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []); //Aqui estamos dizendo que nosso acumulador é um array

console.log(valoresPares)


const pessoas = [
    {nome: 'Alleph', idade: 31},
    {nome: 'Fernanda', idade: 29},
    {nome: 'Crixus', idade: 8},
    {nome: 'Amora', idade: 70},
    {nome: 'Valeria', idade: 48},
]

//Retornar a pessoa mais velha
// Acumulador nesse caso vai ser o primeiro elemento, no caso o {nome: 'Alleph', idade: 31},
// nesse exemplo a pessoa vai ser o segundo elemento {nome: 'Fernanda', idade: 29},
// Assim estamos comparando um com o outro
const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa) => {
    //console.log(acumulador)
    //console.log(pessoa)
    // Imagina idade de alleph vs fernanda
    // Alleph ganha(acumulador)
    // Alleph agora continua no acumulador e vamos verificar a pessoa Crixus
    /** TODO CODIGO EXPLICADO
     * 🚀 Execução do reduce
        - Primeira comparação (índice 1 – Fernanda)
        - acumulador: {nome: 'Alleph', idade: 31}
        - pessoa: {nome: 'Fernanda', idade: 29}
        - Comparação: 29 > 31 ❌ → acumulador continua sendo Alleph.
        - Segunda comparação (índice 2 – Crixus)
        - acumulador: {nome: 'Alleph', idade: 31}
        - pessoa: {nome: 'Crixus', idade: 8}
        - Comparação: 8 > 31 ❌ → acumulador continua sendo Alleph.
        👉 Aqui está o 3º elemento (Crixus) sendo comparado. Ele perde porque tem idade menor.

        - Terceira comparação (índice 3 – Amora)
        - acumulador: {nome: 'Alleph', idade: 31}
        - pessoa: {nome: 'Amora', idade: 7}
        - Comparação: 7 > 31 ❌ → acumulador continua sendo Alleph.
        👉 Esse é o 4º elemento (Amora). Também perde porque tem idade menor.

        - Quarta comparação (índice 4 – Valeria)
        - acumulador: {nome: 'Alleph', idade: 31}
        - pessoa: {nome: 'Valeria', idade: 48}
        - Comparação: 48 > 31 ✅ → acumulador passa a ser Valeria.

     */
    return (acumulador.idade > pessoa.idade) ? acumulador : pessoa
});
console.log(`Usuario com maior idade encontrador ${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos`)