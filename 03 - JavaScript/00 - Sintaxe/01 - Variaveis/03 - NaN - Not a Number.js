// NaN significa "Not a Number" (Não é um número)
// Ele é retornado quando uma operação matemática falha ou não faz sentido

// Exemplo 1: Tentar converter uma string não numérica em número
const resultado1 = Number("abc"); // Isso não pode ser convertido em número
console.log(resultado1); // Saída: NaN

// Exemplo 2: Operação matemática inválida
const resultado2 = 0 / 0; // Divisão por zero não é definida
console.log(resultado2); // Saída: NaN

// Exemplo 3: Verificando se um valor é NaN
console.log(isNaN(resultado1)); // Saída: true

// Atenção: NaN é do tipo 'number', mas representa um valor inválido
console.log(typeof NaN); // Saída: "number"