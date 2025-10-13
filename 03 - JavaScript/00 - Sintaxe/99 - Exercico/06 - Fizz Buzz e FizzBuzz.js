// Crie uma funçao que
// Se o numero for divisivel por 3 retorna fizz -V
// Se o numero for divisivel por 5 retorna buzz - V
// Se o numero for divissivel por 3 e 5 retorna fizz buzz - V
// Se NAO for divisivel por 3 e 5 = retorna o proprio numero - V
// Se NAO for um numero retorna a propria entrada. - V
// Checar se realmente é um numero - V
// Usa a funcao com o numero de 0 a 100 : Só pode entrar numero de 0 a 100

function isDivisivel(numero) {
    if (typeof numero !== 'number') return numero;

    if (typeof numero === 'number') { // Checa para ver se é numero
        if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
        else if (numero % 3 === 0) return 'Fizz'
        else if (numero % 5 === 0) return 'Buzz'
        else return numero
    }
}

for (let i = 0; i <= 100; i++) {
    console.log((i), isDivisivel(i))
}



