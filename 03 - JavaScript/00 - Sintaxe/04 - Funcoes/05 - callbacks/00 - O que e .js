/**
 * Imagina que temos um aplicativo, onde precisamos checar o login do usuario, e apos isso carregar uma foto
 * Podemos fazer isso com callbacks onde primeiro vamos validar o login depois chamar outra funçao para carregar a foto.
 * Isso tudo em ordem.
 * 
 * Em JavaScript, o termo "callback" pode ser traduzido como "função de retorno" ou "função de chamada de volta", embora na prática muitos desenvolvedores brasileiros usem o termo original em inglês mesmo.
 * 
 * Um callback é uma função passada como argumento para outra função, que será executada posteriormente, geralmente após algum tipo de operação assíncrona ou evento.
 */

/** Exemplo sem callback
 * Imagina que precisamos chamar o nome dos usuarios e que por algum motivo eles não vinheram na ordem certa.
 * Isso seria um problema
 * Repara que elas estao chegando em tempos separados e com isso ele esta executando o que chega primeiro.
 */
function nome1() {
    setTimeout(function () {
        console.log('Alleph')
    }, 500)
}

function nome2() {
    setTimeout(function () {
        console.log('Nogueira')
    }, 1000)
}


function nome3() {
    setTimeout(function () {
        console.log('Oliveira')
    }, 800)
}


/* nome1()
nome2()
nome3() */

console.log('CALLBACKS')

/** Agora usando callbacks para fazer na ordem correta. 
 * Onde um item precisa esta pronto para exibir o outro.
 * 
 * Agora para resolver esse problema vamos fazer dessa forma/
 * Precisamos primeiro passar um parametro que vai ser uma funçao de callback que pode ou não ser recebido aqui no parametro.
 * Se eu quiser executar alguma coisa depois de exibir o primeiro nome eu vou chamar o callback, mas preciso também verificar se ele existe.
 * Então se existir alguma funçao de callback eu executo ela.
 * 
 * Agora imagina que a funcao nome11 esta sendo executada, mas apos ela preciso chamar a nome22
*/

function nome11(callback) {
    setTimeout(function () {
        console.log('Alleph')
        if(callback) callback();
        // CAIU AQUI
    }, 1500)
}
function nome22(callback) {
    setTimeout(function () {
        console.log('Nogueira')
        if(callback) callback();
        // CAIU AQUI
    }, 500)
}
function nome33(callback) {
    setTimeout(function () {
        console.log('Oliveira')
        if(callback) callback();
        // CAIU AQUI
    }, 800)
}


/** Então como queremos chamar o nome22, vamos enviar uma funçao callback
 * Essa funçao vai cair logo apos o if ali.
 * Logo apos isso ele vai chamar a outra funçao
 * E assim vamos fazendo.
 * 
 * Agora na hora que terminar o nome11 vai executar o nome22 e assim sucessivamente.
 */


nome11(function(){
    nome22(function() {
        nome33(function(){
            console.log('Terminei o codigo')
        });
    });
});

/** Agora imagina que temos 50 funções para chamar, esse codigo iria ficar feio de mais.
 * Tem outras maneiras de chamar elas.
 */

nome11(nome11Callback);
// Agora vamos criar a funçao para ela
/** Essa maneira e exatamente igual, mas o professor diz que assim fica mais organizado
 * O que estamos fazendo
 * Primeiro chamando a funcao nome11 passando outra funcao para ele
 * Essa nova funcao vai retornar o valor
 * Com isso vamos chamar a 3 funcao
 */

function nome11Callback(){
    nome22(nome22Callback);
}

function nome22Callback(){
    nome33(nome33Callback)
}


function nome33Callback(){
    console.log('Codigo terminado.')
}