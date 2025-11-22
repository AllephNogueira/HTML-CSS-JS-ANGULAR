const {gets, print} = require ('./funcoes')



function main(){
    const resultado = gets([10,45,18,654,789,156,489,12,456,456,789,456,123,456,8,7])
    print(`Quantidade de numeros pares ${resultado.pares}`)
    print(`Quantidade de numeros impares ${resultado.impares}`)
}

main();