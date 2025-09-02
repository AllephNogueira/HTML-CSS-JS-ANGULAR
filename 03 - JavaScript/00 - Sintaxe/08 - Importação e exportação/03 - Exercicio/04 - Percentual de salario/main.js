const { gets, print } = require('./funcoes.js')

const valorSalarioBruto = 2500.00

function main() {
    if (typeof valorSalarioBruto === 'number' && isFinite(valorSalarioBruto) && valorSalarioBruto > 0) {
        const desconto = gets(valorSalarioBruto)
        print(`Desconto foi de: ${desconto}`)
        const salarioLiquido = valorSalarioBruto - desconto
        print(`Salario liquido: ${salarioLiquido}`)
    }

}

main();