// Vamos pegar somente o resto que não declaramos
/**
 * Lembrando que aqui o que estamos fazendo é dando 'apelido' para cada indice do array
 * Assim quando a gente chamar, podemos usar esses apelidos.
 * 
 * Aqui vamos ter dois significado o ...rest e ...sprad
 * 
 * ...rest quando queremos pegar o restante
 * ...sprad quando queremos separar o array.
 */
const familia = ['Alleph', 'Fernanda', 'Crixus', 'Amora', 'Passarinho', 'Gatos', 'Outros cachorros']
const [pai, mae, filho, filha, ...resto] = familia

console.log(resto) // Vamos imprimir todos os elementos que não declaramos.
// [ 'Passarinho', 'Gatos', 'Outros cachorros' ]

console.log(resto[0]) // Passarinhos
console.log(resto[1]) // Gatos
console.log(resto[2]) // Outros cachorros





/**
 * 🔍 O que é ...array?
    O ... (chamado de spread operator) serve para espalhar os elementos de um array (ou objeto) em outro contexto —     como dentro de outro array, função, ou estrutura.

 */

const numeros = [1, 2, 3];
const copia = [...numeros];

console.log(copia); // [1, 2, 3]

// Juntar array
const a = [1, 2];
const b = [3, 4];
const juntos = [...a, ...b];

console.log(juntos); // [1, 2, 3, 4]

// Passar como parametro
const valores = [5, 10, 15];

function somar(a, b, c) {
  return a + b + c;
}

console.log(somar(...valores)); // 30