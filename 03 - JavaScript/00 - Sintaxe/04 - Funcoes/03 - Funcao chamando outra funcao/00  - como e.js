// MANEIRA TRADICIONAL
function multiplicarPor2(valor) {
    return valor *2
}
function multiplicarPor3(valor) {
    return valor *3
}
function multiplicarPor4(valor) {
    return valor *4
}


/* 
console.log(multiplicarPor2)
console.log(multiplicarPor3)
console.log(multiplicarPor4) */

// MANEIRA MAIS SIMPLES

function multiplicando(multiplicacao) {
    return function(valor) {
        return valor * multiplicacao
    }
}


const por2 = multiplicando(2) // CHAMO A FUNCAO RETORNA A OUTRA FUNCAO
console.log(por2(10)) // AGORA POR 2 VAI SER A NOVA FUNCAO QUE VAMOS PRECISAR PASSAR O PARAMETRO QUE VAMOS MULTIPLICAR


const por3 = multiplicando(3) // CHAMANDO A FUNCAO
console.log(por3) // AQUI DENTRO VAMOS TER A NOVA FUNCAO QUE ESTA EM ANONIMO


const por4 = multiplicando(4) // FUNCAO MULTIPLICANDO RETORNANDO A OUTRA FUNCAO
console.log(por4(40))

// É MAIS OU MENOS COMO SE A GENTE TIVESSE FAZENDO ASSIM
// SERIA COMO SE FOSSE ASSIM, ESTAMOS COLOCANDO O RETORNO QUE É UMA FUNÇAO DENTRO DA VARIAVEL
// AI QUANDO USAMOS ESSA VARIAVEL, VAI TER A SEGUNDA FUNÇAO E VAMOS USAR, O VALOR QUE FOI PASSADO NA PRIMEIRA, FICARA SALVO.
const funcaoDiretoNaVariavel = (valor, multiplicacao) =>  valor * multiplicacao
console.log(funcaoDiretoNaVariavel(20,2))


