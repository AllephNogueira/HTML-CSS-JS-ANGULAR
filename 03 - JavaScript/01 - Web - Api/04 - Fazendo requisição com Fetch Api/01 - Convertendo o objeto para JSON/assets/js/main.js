

const offset = 0 // Qual pagina vamos carregar, no caso a pagina 0
const limit = 10 // Limite de 10 itens nessa pagina
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` // URL de onde vamos puxar.

/** O fetch vai puxar um objeto  do tipo bodyReadableStream
 * Agora vamos precisar converter ele para um JSON
*/
/** 
fetch(url)
    .then(function (response) {
        /** CONVERTENDO PARA JSON 
        
        response.json().then(function(objetoJson) {
            console.log(objetoJson)
        }).catch(function(erro) {
            console.log(`Objeto não encontrado ${erro}`)
        })

    }).catch(function (erro) {
        console.log('Erro')
        console.log(erro)
    }).finally(function (final) {
        console.log('Requisição concluida.')
        console.log('Idependente da operação ter um sucesso ou falha ele cai aqui')
        console.log(final)
    })


*/


// Outra maneira de fazer para deixar o codigo mais simples

fetch(url)
    .then(function (response) {
        /** Estou convertendo para JSON 
         * e se der certo vai cair no then de baixo */
        return response.json()
    })
    .then(function (jsonBody) {
        /** Se deu certo vamos cair aqui com o objeto já retornado do primeiro then */
        console.log(jsonBody)
    })
    .catch(function (erro) {
        console.log(erro)
    })
    .finally(function(final) {
        console.log('Aplicação encerrada.')
    })


console.log('Sucesso')

// Agora simplificando mais ainda usando a Arrow Function

fetch(url)
    .then((response) => { // ATENÇÃO: Observa que removemos apenas a palavra function
        /** Estou convertendo para JSON 
         * e se der certo vai cair no then de baixo */
        return response.json()
    })
    .then((jsonBody) => {
        /** Se deu certo vamos cair aqui com o objeto já retornado do primeiro then */
        console.log(jsonBody)
    })
    .catch((erro) => {
        console.log(erro)
    })
    .finally((final) => {
        console.log('Aplicação encerrada.')
    })


console.log('Sucesso')


// Atenção se a gente tem apenas uma linha de retorno, não precisamos usar a palavra return
// Tiramos apenas o return dai.

/** Agora explicando todo o codigo */
fetch(url)
    .then((response) => response.json()) // Pegamos o response e estamos retornando em formato JSON
    .then((jsonBody) => console.log(jsonBody)) // Retornando esse JSON convertido
    .catch((erro) => console.log(erro))
    .finally((final) => console.log('Codigo finalizado' + final))

console.log('Sucesso')

/** Resumindo, estamos pegando os dados da URL
 * se der certo THEN e quando tiver pronto, vamos converter ele para JSON
 * Agora quando der certo e quando terminar de fazer o objeto JSON
 * pegamos esse objeto (response.json) e damos um console log nele
 * 
 * Atenção no segundo then, pegamos um parametro, esse parametro que entra é o response.json, mas estamos chamando ele de jsonBODY
 */