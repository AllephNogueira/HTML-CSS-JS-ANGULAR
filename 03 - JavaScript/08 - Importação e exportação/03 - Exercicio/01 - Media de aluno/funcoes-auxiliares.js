function gets (array){
    let notaTotal = 0
    for (let index = 0; index < array.length; index++) {
        notaTotal += array[index];
    }
    media = notaTotal / array.length
    return media

}

function calcularMedia(media){
    if(media < 5){
        return 'Reprovado'
    }else if(media >= 5 && media < 7){
        return 'Recuperação'
    }else {
        return 'Aprovado'
    }

}

function print(texto) {
    console.log(texto)
}


module.exports = {gets, calcularMedia, print}