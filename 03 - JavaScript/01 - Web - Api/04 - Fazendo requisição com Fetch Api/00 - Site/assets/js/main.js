

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

/** Resumo THEN E CATCH / FINAL 
 * Se o fetch der certo, vamos apos ele esta pronto cair dentro do THEN
 * Se o fetch der algo de errado, vamos cair dentro do catch
 * Independente do que acontece, vamos cair no FINAL
 */
fetch(url)
    .then(function (response) {
        console.log(response)
    }).catch(function (erro) {
        console.log('Erro')
        console.log(erro)
    }).finally(function (final) {
        console.log('Requisição concluida.')
        console.log('Idependente da operação ter um sucesso ou falha ele cai aqui')
        console.log(final)
    })

console.log('Sucesso')