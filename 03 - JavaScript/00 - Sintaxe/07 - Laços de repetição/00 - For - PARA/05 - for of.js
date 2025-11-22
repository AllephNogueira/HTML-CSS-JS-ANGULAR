// Diferente de in que vem o indice
// Of vem o valor do indice.

const frutas = ['maçã', 'banana', 'laranja'];

for (const fruta of frutas) {
    console.log(fruta);
}

// Exemplo com string
const palavra = 'JavaScript';
for (const letra of palavra) {
    console.log(letra);
}

// Exemplo com Set
const numeros = new Set([1, 2, 3]);
for (const numero of numeros) {
    console.log(numero);
}

// Exemplo com Map (iterando pelas entradas)
const mapa = new Map([
    ['nome', 'Ana'],
    ['idade', 25]
]);
for (const [chave, valor] of mapa) {
    console.log(`${chave}: ${valor}`);
}