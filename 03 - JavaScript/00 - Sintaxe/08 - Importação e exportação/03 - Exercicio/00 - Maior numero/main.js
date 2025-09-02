const funcoes = require('./funcoes-auxiliares')

/** Estamos entrando com uma lista de numeros no outro arquivo
 * Ai chamamos a funcao gets que vai retornar essa lista de numeros para a gente
 * Quando retornamos essa lista de numeros, vamos primeiro ver qual o tamanho dessa lista
 * Depois fazer um for para percorrer toda essa lista
 * E ai vamos verificar se a variavel maiorValor e menor que o numero que esta vindo
 * Se o numero que esta vindo for maior, adicionamos dentro da variavel
 * E ai percorremos toda a lista ate ficar com o maior valor dentro da variavel.
 */

const numerosSorteados = funcoes.gets();
//funcoes.print(numerosSorteados) // Aqui esta todos o numeros
let maiorNumero = 0

for (let index = 0; index < numerosSorteados.length; index++) {
    if(numerosSorteados[index] > maiorNumero) {
        maiorNumero = numerosSorteados[index]
    }
    
}

funcoes.print(`Maior numero sorteado foi ${maiorNumero}`)