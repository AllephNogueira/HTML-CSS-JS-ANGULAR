const notas = [];

notas.push(7);
notas.push(9);
notas.push(10);
notas.push(4);


console.log(`Quantidade de notas ${notas.length}`) // SAIDA: 4

/** Uma forma de calcular tudo 
 * Somamamos todas as notas e dividimos por 4 que é o total de itens dentro do array.
*/
const soma = notas[0] + notas[1] + notas[2] + notas[3];
console.log(`Media do usuario foi ${soma / notas.length}`)

/** Outra forma de fazer usando o forEach */
    let soma2 = 0
    notas.forEach(function(nota) {
        soma2 += nota
    })

    console.log(`Media ${soma2 / notas.length}`)

/** Agora usando o for */

    let soma3 = 0
    for(let i = 0; i < notas.length; i++) {
        soma3 += notas[i]
    }

    const media = soma3 / notas.length
    console.log(`Media: ${media}`)

