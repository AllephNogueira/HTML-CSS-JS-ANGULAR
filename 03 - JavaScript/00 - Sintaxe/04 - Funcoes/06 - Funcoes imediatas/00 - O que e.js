/** IIFE -> Immediately invoked function expression
 * Funcao auto invocada
 * É uma funçao que podemos chamar ela logo apos ela ser criada
 * Imagina que temos um site e queremos criar uma funçao para ele, apos criar ela ela ja fique disponivel sem precisar chamaar
 */


// Maneira tradicional
function saudacao(){
    console.log('Ola, mundo!')
}

// Funcao auto invocada
// Repara que aqui, não precisamos chamar, usando os () no final, ela automaticamente já vai ser invocada.
/** Dessa forma não vamos ter conflitos com variaveis que estao do lado de fora. 
 * Dessa forma também estamos protegendo o codigo.
 * Podemos ter outras funçoes aqui dentro também
*/
(function(){
    const nome = 'Alleph';
    console.log(`Bem vindo a função que executa imediatamente ${nome}`)

    function falaOi(){
        console.log(`OII - ${nome}`)
    }

    falaOi();
})();

/** Passando parametros para uma funçao auto invocavel */

const parametro2 = 'teste 2';

(function(parametro, parametro2){
    console.log(`Ola essa é meu parametro ${parametro}`);
    console.log(`Meu parametro com uma variavel ${parametro2}`);
})('Teste parametro', parametro2);


