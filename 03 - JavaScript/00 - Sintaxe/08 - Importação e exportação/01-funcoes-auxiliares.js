function gets (){
    return 10;
}

function print(texto){
    console.log(texto)
}

/** Isso aqui é uma exportação de um objeto
 * Isso aqui é um objeto literal
 * Dentro dele vamos passar 2 atributos.
 * Estamos passando as funções que criamos aqui dentro.
 */
module.exports = { gets, print }