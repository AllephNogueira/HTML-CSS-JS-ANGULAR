function mostrarHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

console.log(mostrarHora());

/** Podemos chamar a funçao a todo momento para exibir a hora
 * Mas também temos o setInterval === selecionar o intervalo
 * Ele vai fazer a funçao ser chamada o tempo que a gente quiser, de tempo em tempo.
 */

function funcaoDoInterval(){
    console.log(mostrarHora())
}

// Vamos passar a referencia da funçao que vai ser chamada, sem executar ela
// Executa a funcao seria colocar os parametros.

// 2 O segundo parametro vai ser de quanto em quanto tempo ela vai ser executada.


//setInterval(funcaoDoInterval, 1000)

// Outra maneira de fazer e criando uma funçao anonima para ela
const time = setInterval(function() {
    console.log(mostrarHora())
}, 1000)



// Set time out --- ou seja o tempo que ela vai parar
/** Imagina que criamos o setInterval e ele vai ficar rodando
 * com o set time out, podemos definir quanto tempo o setInterval vai ficar rodando
 * 
 * Configuramos para ela rodar no maximo 10 segundos.
 */

setTimeout(function() {
    clearInterval(time)
}, 10000)

/** Agora imagina que essa vai parar com 10 segundos
 * Mas depois de 15 segundos, queremos exibir uma mensagem
 */

setTimeout(function(){
    console.log('A bateria do relogio está com defeito.')
}, 15000)