// Imagina que temos uma função
// Onde ela vai ter 3 estagios
// Conforme a gente for chamando ela vai indo para o proximo estagio
// Imagina que é uma funçao onde vamos ter 3 campeões, vamos chamar 3 vezes e pegar esses 3 caras.

function* ganhadores1(){
    yield 'Alleph';
    yield 'Crixus';
    yield 'Amora';
}

const g1 = ganhadores1();
console.log(g1) // tipo da função: Object [Generator] {}
console.log(g1.next)// [Function: next]
console.log(g1.next()) // { value: 'Alleph', done: false } // DONE
/** O done seria: Já terminou o proximo valor? então seria False, porque ainda temos valor dentro. */
console.log(g1.next().value) // Agora aqui vamos ter o valor2 === Crixus
console.log(g1.next().value) // Valor 3 == Amora
console.log(g1.next().done) // Aqui eu vou ter o valor true, dizendo que ENCERRAMOS.


