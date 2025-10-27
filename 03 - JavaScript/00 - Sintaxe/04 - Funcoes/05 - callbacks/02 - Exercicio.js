/**
 * 🧪 Exercício 2: Operação matemática com callback
 *
 * Crie uma função chamada `calcular` que recebe dois números e uma função callback.
 * A função deve passar os dois números para o callback e retornar o resultado da execução do callback.
 *
 * ⚠️ Atenção:
 * - Estamos passando os dois valores (`a` e `b`) para a função callback.
 * - Ela retorna esses dois valores
 * - Calculamos esses 2 valores x e y
 * - Jogamos esses 2 valores para dentro da variavel
 * - Exibimos essa variavel.
 */

function calcular(a, b, callback) {
  if (callback) { // Se existe o callback, ele será executado com os dois valores.
    return callback(a, b);
  }
}

let resultado = calcular(5, 3, function(x, y) { // Aqui vai ser nossa Callback só que nao estamos dando nome a ela
    // E como se fosse uma funçao anonima.
  return x + y;
});

console.log(resultado); // Deve exibir 8