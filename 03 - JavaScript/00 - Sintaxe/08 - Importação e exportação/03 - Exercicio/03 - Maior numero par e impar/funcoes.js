
function gets(array) {

    const numeros = {
        pares: 0,
        impares: 0
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element % 2 === 0) {
            if(element > numeros.pares) {
                numeros.pares = element
            }
        }
        else {
            if(element > numeros.impares) {
                numeros.impares = element
            }
        }
    }

    return numeros
}


function print(texto) {
    console.log(texto)
}


module.exports = { gets, print }