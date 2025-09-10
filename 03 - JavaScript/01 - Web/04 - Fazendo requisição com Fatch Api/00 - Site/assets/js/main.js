

const offset = 0 // Qual pagina vamos carregar, no caso a pagina 0
const limit = 10 // Limite de 10 itens nessa pagina
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` // URL de onde vamos puxar.

/** Esse fetch vai retornar um promise === promessa
 * Mas não sabemos quando ele vai retornar, porque vamos buscar os dados la dentro do servidor, e isso pode demorar.
 * promise = promessa de resultado
 * Ou seja, se der tudo certo uma hora vamos receber essa promessa de resposta.
 */

/** Then é um metodo que serve para encadear, ele vai retornar algo depois que a promisse estiver pronta.
 * Ele vai fazer algo depois que a promise tiver pronta.
 */
fetch(url).then(function (response) {
    console.log(response.json())
})