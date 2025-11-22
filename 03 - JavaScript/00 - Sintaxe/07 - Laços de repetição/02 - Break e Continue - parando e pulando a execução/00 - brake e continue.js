// Para que serve?
console.log('CONTINUE')
// CONTINUE
    // Imagina que queremos contar de um ate 10
    // Mas a gente quer pular o numero 5
    // Então vamos fazer um CONTINUE e quando encontra o numero 5 
    // Ele vai parar a executação de tudo que esta em BAIXO
    // E pular para a proxima execução, que no caso vai ser o 6
const numeros = [1,2,3,4,5,6,7,8,9]

for(let numero of numeros){

    if(numero === 5) {
        continue;
        // Pulando o 5
    }

    console.log(numero)
}

console.log('BREAK')
// BREAK
    // Aqui podemos dizer que vai ser ao contrario.
    // QUando voce encontrar o break
    // Queremos parar.


for(let numero2 of numeros) {
    if(numero2 === 7){
        break;
    }
    console.log(numero2)
}