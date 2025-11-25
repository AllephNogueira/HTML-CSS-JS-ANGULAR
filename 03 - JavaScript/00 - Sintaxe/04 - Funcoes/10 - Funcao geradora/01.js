// Imagina uma funcao que voce pode ir chamando tudo que esta dentro dela aos poucos
// Imagina assim, quero foto, nome e numero
// Mas podemos ir chamando isso aos poucos, para evitar pegar muitos dados de uma só vez


function* dados(){
    yield 'Foto usuario';
    yield 'Nome do Usuario';
    yield 'Numero do Usuario'
}

const dado = dados()
console.log(dado.next()) // Next para chamar o proximo // FOTO
console.log(dado.next()) // Next para chamar o proximo // NOME
console.log(dado.next()) // Next para chamar o proximo // NUMERO

/** RETORNO
 * { value: 'Foto usuario', done: false }
{ value: 'Nome do Usuario', done: false }
{ value: 'Numero do Usuario', done: false }

Done = terminou os dados? done=não, porque ainda tem valores a frente.
 */

// Podemos pegar pelo valor também
console.log(dado.next().value)

// Outra forma de fazer com o for
const nomes = dados()
for(let nome of nomes){
    console.log(nome)
}