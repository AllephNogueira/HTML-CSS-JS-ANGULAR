// Escreva uma funçao que recebe dois numeros e retorna o maior.
function retornarOMaior(numero1, numero2) {
    if (numero1 > numero2) return numero1
    return numero2
}

console.log(retornarOMaior(99, 20))


// Agora com a ternario

const numero1 = 150
const numero2 = 20
console.log(`${numero1 > numero2 ? numero1: numero2}`)

// Fazendo dentro de uma funçao
function retornarOmaior2(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2
}
console.log(retornarOmaior2(250, 99999))


// Agora com arrow function
// Fazendo dentro de uma funçao
const maximo = (numero1, numero2) => {
    return numero1 > numero2 ? numero1 : numero2
}
console.log(maximo(10,80))

// Agora quando temos apenas uma linha, não precisamos de chaves e nem do return.
const numeroMaior = (x, y) => x > y? x : y;
console.log(numeroMaior(10,88))