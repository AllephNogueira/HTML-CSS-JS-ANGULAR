// Este código demonstra o uso da função isFinite() em JavaScript

function verificarSeEhFinito(valor) {
    if (isFinite(valor)) {
        console.log(`✅ O valor "${valor}" é um número finito.`)
    } else {
        console.log(`❌ O valor "${valor}" NÃO é um número finito.`)
    }
}

// Exemplos de valores para testar
const exemplos = [
    100,            // número inteiro
    3.14,           // número float
    '2500',         // string numérica (convertida para número)
    'texto',        // string não numérica
    NaN,            // Not a Number
    Infinity,       // infinito positivo
    -Infinity       // infinito negativo
]

// Testando cada exemplo
exemplos.forEach(valor => verificarSeEhFinito(valor))