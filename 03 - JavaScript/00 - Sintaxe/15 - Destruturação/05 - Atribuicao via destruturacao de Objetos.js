const pessoa = {
    nome: 'Alleph',
    sobrenome: 'Nogueira',
    idade: 31,
    endereco: {
        rua: 'Duarte branco, 26',
        cep: 24465760,
        numero: 26
    }
}

// maneira de fazer sem atribuiçao via destruturação
const nomePessoa = pessoa.nome;
console.log(pessoa.nome)

/* // atribuição via destruturação
// O que estamos fazendo aqui, estamos passando um objeto e estamos dizendo
// Extrai desse objeto o nome...
// Atençao estamos usando nome e ele tem um atributo chamado nome, então o JS consegue entender que x é igual a x
// Se a gente passar uma variavel diferente dos atributos, vamos ter um erro de indefinido. */

/* const {nome} = pessoa;
console.log(nome) */
/* 

CONFIGURAÇÃO COM 3 VARIAVEIS */
    /* const {nome, sobrenome, idade} = pessoa;
    console.log(nome, sobrenome, idade) */

// VALOR PADRAO OU VAZIO
// VAZIO
    /* const {nome = '', sobrenome = '', idade} = pessoa;
    console.log(nome, sobrenome, idade) */

// VALOR PADRAO
    // Mais para colocar um valor padrao, no objeto não pode esta configurado nenhum valor
    /* const {nome = 'Fernanda', sobrenome = 'Nogueira', idade} = pessoa;
    console.log(nome, sobrenome, idade)
 */


// MUDAR O NOME DA VARIAVEL
    // Imagina que vai ter casos onde não queremos que o atributo se chame nome...
    // So fazer a referencia da variavel usar os : para dizer qual vai ser o novo nome dela.
    const {nome: teste, sobrenome, idade} = pessoa;
    console.log(teste, sobrenome, idade)


// AGORA VAMOS IMAGINAR UM OBJETO DENTRO DO OUTRO OBJETO
// Como podemos acessar

/* const {endereco: {rua, numero, cep}} = pessoa;
console.log(rua, cep);
 */

// AGORA SE QUISER PEGAR O OBJETO DENTRO DO OBJETO COMPLETO
const {endereco} = pessoa
console.log(endereco.cep) // Acessando o CEP
