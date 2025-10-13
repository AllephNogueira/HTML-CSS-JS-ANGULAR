// O throw basicamente serve para a gente gerar um erro.
// 2 - Podemos gerar uma exceção também.

function somar(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        /* Aqui vamos gerar um erro.
        // Quando o usuario digitar algo diferente de numero, vamos cair aqui.
        // Nesse caso se os tipos não forem numericos, vamos lançar um erro com o throw
        //throw ('Você precisa digitar numeros para calcular.')
        //Se a funçao gerar um erro, nada aqui para baixo vai ser executado. */
        throw new Error('Você precisa digitar numeros para calcular.')
        /** Isso chamamos de classes construtoras, onde podemos criar nossas classes também
         * throw new Error('Você precisa digitar numeros para calcular.')
         * throw new Reference('Você precisa digitar numeros para calcular.')
         * Esse erros que podemos criar, serve para o desenvolvedor ter noçao de qual tipo de erro que aconteceu.
         */

    }
    return x + y;
}

// Agora vamos tratar nosso erro
try {
    console.log(somar(10, 20))
    console.log(somar(10, 'a'))
} catch (erro) {
    console.log('Você precisa entrar com dados validos.')
    console.log(erro) // Aqui vamos pegar a mensagem que nos mesmos digitamos no Throw
    // Mas podemos gerar o proprio erro do Javascript linha 11

}




