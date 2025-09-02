// Aqui vamos ter uma funçao que automaticamente ela vai ser invocada apos ser criada
// Lembra da matematica? onde temos 2 * 2 + 10
// Quando queremos que a soma seja feita primeira o que fazemos?
// 2 * (2 + 10) = Primeiro a soma depois a multiplicação

// Exemplo de função sem invocação automatica

function dizerOla() {
    console.log('Olá')
}

//dizerOla() // CHAMANDO A FUNÇÃO

// Funçao invocando primeiro antes de tudo
// Repara que nao precisamos chamar ela, ela mesmo automaticamente se invoca por causa dos ()
// Assim como na matematica ela entende que precisa ser feito antes de qualquer coisa.

(function dizerOi() {
    console.log('Oi')
})();


// Podemos também tirar o nome da funçao e deixar ela uma funçao não nomeada
(function () {
    console.log('Oi')
})(); 


/**Geralmente usamos isso mais para parte da Web, onde queremos funções que vamos utilizar somente uma vez
 * Criamos essas funções ate mesmo para isolar o que cada parte do codigo faz.
 */