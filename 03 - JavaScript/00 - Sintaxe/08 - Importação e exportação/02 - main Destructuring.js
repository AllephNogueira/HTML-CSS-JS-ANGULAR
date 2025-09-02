const funcoes =  require('./01-funcoes-auxiliares'); // Importando outro arquivo

console.log(funcoes) // Vamos saber o que esta vindo nessas funções
// Saida: { gets: [Function: gets], print: [Function: print] }


console.log(funcoes.gets()) // Importando diretamente a funçao gets
// Saida: 10


// EXEMPLO AQUI //

/** 🧠 Imagine assim:
Você tem uma caixa com várias coisas dentro (um array ou objeto). Em vez de abrir a caixa e pegar item por item manualmente, o destructuring te permite tirar tudo de uma vez e já nomear cada coisa.
 */

const frutas = ["maçã", "banana", "laranja"];
const [primeira, segunda, terceira] = frutas; // Repara que ja estamos dando um valor para cada item.

console.log(primeira); // "maçã"
console.log(segunda);  // "banana"
console.log(terceira); // "laranja"

// Outro exemplo
/** Repara que estamos pegando o item e adicionando como se ja fosse uma variavel
 * Para ficar mais facil de usar
 */
    // Com destructuring
    const familia = ['Alleph', 'Fernanda', 'Crixus', 'Amora']
    const [alleph, fernanda, crixus, amora] = familia
    console.log(alleph)

    // Sem destructuring - Repara que o codigo ficou muito maior
    const alleph1 = familia[0]
    console.log(alleph1)


/** Agora com objeto exportado 
 * Dessa forma estamos usando diretamente, sem precisar usar o funcoes.gets()
*/
    const {gets, print} = require('./01-funcoes-auxiliares');
    console.log(gets());

    //🧾 Sem destructuring, seria assim
    //const funcoes = require('./01-funcoes-auxiliares');
    //console.log(funcoes.gets());


// Fazendo com um objeto

    // sem
    const carro = {
        modelo: 'C4'
    }
    const novoCarro01 = carro.modelo = 'Prisma' // REATRIBUINDO NOVO VALOR
    console.log(carro.modelo)

    // com

    const {modelo01} = carro
    const novoCarro02 = {modelo01: 'Onix'} // REATRIBUINDO NOVO VALOR
    console.log(novoCarro02) 

    // Agora imprimindo somente o modelo com destructuring,
    
    const {modelo02} = carro
    const novoCarro03 = {modelo02: 'Onix'} // REATRIBUINDO NOVO VALOR
    console.log(novoCarro03.modelo02) 


    // Pulando algum atributo
    const carros = ['Fusca', 'Onix', 'Civic'];
    const [ , segundoCarro ] = carros;

    console.log(segundoCarro); // Onix