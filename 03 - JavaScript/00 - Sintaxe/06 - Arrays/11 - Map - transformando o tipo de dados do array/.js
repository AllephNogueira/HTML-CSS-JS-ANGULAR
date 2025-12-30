// Filtro e para filtrar
// Map e para a transformar algo
// Imagina que vamos passar por dentro do array e vamos transformando cada elemento

// Vamos passar por elementos a elementos e vamos dobrando eles
const dobrarValores = [10,20,30,40,50,60,70,80,90]

const valoresDobrados = dobrarValores.map(numero => numero + numero)
console.log(valoresDobrados)

// TRANSFORMANDO STRINGS EM NUMEROS.

const numeros = ['1','2','3','4','5']
const convertidos = numeros.map(numero => parseInt(numero))
convertidos.forEach(numero => {
    console.log(typeof numero)
});


// TRANSFORMANDO

const pessoas = [
    {nome: 'Alleph', idade: 31},
    {nome: 'Fernanda', idade: 29},
    {nome: 'Crixus', idade: 7},
    {nome: 'Amora', idade: 6}
]

// Retornando apenas uma string com o nome da pessoa
const nomePessoa = pessoas.map(pessoa => pessoa.nome)
console.log(nomePessoa)

// Removendo a chave nome do objeto
// Aqui vamos criar um novo objeto somente com a idade
const removendoChaveNome = pessoas.map(pessoa =>  ({ idade: pessoa.idade }));
console.log(removendoChaveNome)


// Criando um novo objeto com um id na frente
// Aqui estamos criando um novo objeto com outros atributos.
const chaveIdNoArray = pessoas.map((pessoa, index) => ({id: index +1, nome: pessoa.nome, idade: pessoa.idade}));

chaveIdNoArray.forEach(novoArray =>
    console.log(novoArray)
);


// Outra maneira de fazer mais simples
// So que dessa forma o novo atributo ID, vai ser jogado para o ultimo atributo

const comID = pessoas.map((objeto, index) => {
    objeto.id = index
    return objeto
}
    
)

console.log(comID)


