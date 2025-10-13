const seuPeso = 105
const suaAltura = 1.80

const calculoIMC = seuPeso / (suaAltura * suaAltura)




if (calculoIMC <= 18.5) {
    console.log("Abaixo do peso")
} else if (calculoIMC <= 25) {
    console.log("Peso normal")
} else if (calculoIMC <= 30) {
    console.log("Acima do peso")
} else if (calculoIMC <= 40) {
    console.log("Obeso")
} else {
    console.log("Obesidade grave")
}

console.log(`IMC ${calculoIMC.toFixed(0)}`)