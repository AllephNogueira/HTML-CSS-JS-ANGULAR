const numeros = [3,
    2,
    1,
    4]; // Aqui esta os numeros que vem do Array
let maiorNumeroPar = 0
let menorNumeroImpar = 1

for (index = 0; index < numeros.length; index++) {
    const numero = numeros[index]

    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero

        }
    } else {
        if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero
        }
    }
}

console.log(`Maior número par: ${maiorNumeroPar}`)
console.log(`Menor número impar: ${menorNumeroImpar}`)

