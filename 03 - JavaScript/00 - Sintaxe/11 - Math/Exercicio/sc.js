/**
 * Lembrar que o prompt sempre retorna uma String.
 */
const numeroDigitado = prompt('Digite um numero')
//const numeroDigitado = Number(prompt('Digite um numero'))  // Outra maneira de converter, com apenas 1 linha de codigo.
let numeroConvertidoParaInteiro = parseFloat(numeroDigitado)

document.getElementById('numero-digitado').innerHTML = numeroDigitado

document.body.innerHTML += `Raiz quadrada é: <strong> ${Math.sqrt(numeroConvertidoParaInteiro).toFixed(0)} </strong><br>`
document.body.innerHTML +=  `${numeroConvertidoParaInteiro} é inteiro? <strong>${Number.isInteger(numeroConvertidoParaInteiro)}</strong><br>`
document.body.innerHTML +=  `É NaN? <strong>${isNaN(numeroConvertidoParaInteiro)}</strong><br>`
document.body.innerHTML +=  `Arredondamento para baixo: <strong>${Math.floor(numeroConvertidoParaInteiro)}</strong><br>`
document.body.innerHTML +=  `Arredondamento para cima: <strong>${Math.ceil(numeroConvertidoParaInteiro)}</strong><br>`
document.body.innerHTML +=  `Numero com duas casas decimais: <strong>${numeroConvertidoParaInteiro.toFixed(2)}</strong><br>`