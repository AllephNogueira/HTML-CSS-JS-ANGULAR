// Repara que nao solicitamos parametro na funçao, mas o JS se nao solicitamos parametros ele mesmo vai ignorar.
/**
 * Podemos enviar quantos parametros a gente quiser,
 * Mas para onde vai esses parametros? 
 * Temos como padrao uma variavel chamada arguments, nela vai ta todos os argumentos que enviamos.
 */

    function funcao(){
        console.log('oi')
    }

    funcao('Parametro')


    function argumentos(){
        console.log(arguments)
    }
/** Tudo que enviamos vai ficar dentro de um objeto/array. */
argumentos(1,2,3,4,5,6,7,'teste')

// Podemos pegar os arguments por indice também

    function argumentos1(){
        console.log(arguments[0])
    }
    argumentos1(1,2,3,4,5,6,7,'teste')

/** Mesmo que a gente envie outros argumentos
 * Todos os argumentos vao esta nessa variavel reservada para isso
 * Podemos acessar tanto esses argumentos ou a variavel arguments
 * 
 * Lembrar que isso só funciona para function e nao para arrow function e outros..
 */