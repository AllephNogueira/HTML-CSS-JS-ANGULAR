const array = [10,20,4,5,4,5,15,48,1,13,48,48,45]
// Vamos filtrar os numeros pares
const novoArray = array.filter(numero => numero > 10)
console.log(novoArray)

// vamos filtrar os numeros pares

const numerosPares = array.filter(numeroPar => numeroPar %2 == 0)
console.log(numerosPares)

// Lembrar que um filter sempre vai retornar um array com a mesma quantidade do array original ou menos.


// Agora com objetos

const pessoas = [
    {nome: 'Alleph', idade: 31},
    {nome: 'Fernanda', idade: 29},
    {nome: 'Crixus', idade: 8},
    {nome: 'Amora', idade: 7},
    {nome: 'Passarinho', idade:8},
    {nome: 'Valeria', idade:48},
    {nome: 'Gabriel', idade: 30}
]
// Retorne as pessoas que tem o nome com mais de 5 letras
// Agora se a gente quiser mudar os dados, podemos usar o map
//🎯 Resumindo
//- filter() → decide quem entra (mantém o objeto inteiro).
//- map() → decide o que retornar (extrai apenas o campo desejado).

const arrayComMaisDe5Letras = pessoas.filter(pessoas => pessoas.nome.length > 7).map(pessoas => pessoas.nome)
console.log(arrayComMaisDe5Letras)


const maioresDeTrinta = pessoas.filter(pessoas => pessoas.idade > 30).map(pessoas => pessoas.nome, pessoas.idade); // Campos que queremos retornar.
console.log(maioresDeTrinta)

// Lembrar que para pegar o ultimo indice, precisamos usar o -1
const terminadosComLetraA = pessoas.filter(function(pessoas) {
    const quantidadeDeletras = pessoas.nome.length
    if(pessoas.nome[quantidadeDeletras-1] == 'a'){
        return pessoas.nome
    }
})

// Outra maneira de fazer
const outraManeira = pessoas.filter(pessoa => 
    pessoa.nome.at(-1).toLowerCase() === 'a'
);

// Pega a pessoa
// Pega o nome da pessoa
// Converte para minusculo
// Procura a ultima palavra do nome
// Se for verdadeiro joga esse elemento para o outro array
const maisOutraManeira = pessoas.filter(pessoa => 
    pessoa.nome.toLowerCase().endsWith('a')
);



console.log(terminadosComLetraA)
console.log(outraManeira)
console.log(maisOutraManeira)
