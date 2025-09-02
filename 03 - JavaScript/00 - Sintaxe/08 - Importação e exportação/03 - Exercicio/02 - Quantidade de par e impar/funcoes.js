
function gets(array) {

    const numeros = {
        pares: 0,
        impares: 0
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element % 2 === 0) {
            numeros.pares += 1
        }
        else {
            numeros.impares += 1
        }
    }

    return numeros
}


function print(texto) {
    console.log(texto)
}


module.exports = { gets, print }