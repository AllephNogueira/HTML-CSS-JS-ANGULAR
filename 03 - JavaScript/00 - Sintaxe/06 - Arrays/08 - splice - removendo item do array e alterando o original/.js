/** Seguindo exemplo o splice podemos remover itens do array e alterar o original
 * ⚠️ Quando usar cada um
- Use slice() quando quiser apenas extrair dados sem alterar o array original (ex.: criar sublistas).
- Use splice() quando precisar modificar o array (ex.: remover itens de uma lista, inserir novos elementos).

*/

const arrayOriginal = []
arrayOriginal.push('Alleph')
arrayOriginal.push('Fernanda')
arrayOriginal.push('Crixus')

console.log(arrayOriginal) // Array original, com itens adicionado

// Agora vamos remover do array original

const arrayModificado = arrayOriginal.splice(1,1)
console.log(arrayModificado) // Aqui removemos a fernanda
console.log(arrayOriginal) // Repara que aqui tambem vamos estar sem a Fernanda

// Resumindo isso tudo porque o splice ele altera o array original.


// Agora imagina trabalhando na negativa
// POSITIVO              0           1          2          3            4
// NEGATIVO              -5           -4        -3          -2          -1
const arrayNegativo = ['Alleph', 'Fernanda', 'Crixus', 'Amora', 'Passarinhos']
//Se eu quiser remover do negativo, eu faço isso
// nesse exemplo no negativo, sempre começamos de -1, porque nao existe -0
// Vamos remover amora.
console.log(arrayNegativo.splice(-2, 1)) // Aqui vamos retornar o removido, mas tambem vamos alterar o array original
console.log(arrayNegativo)


