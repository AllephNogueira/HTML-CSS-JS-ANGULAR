const familia = ['Alleph', 'Fernanda', 'Crixus', 'Amora', 'Outros']
// FATIANDO
// Vamos imaginar que queremos pegar o indice 1 e ir ate o 2
// Nesse caso iria começar em fernanda e ir ate crixus
// Mas o indice final nao é incluido, então para isso, precisamos ir de 1 ate 3

const fatiado = familia.slice(1,3)
console.log(fatiado) // FERNANDA, CRIXUS


// Agora vamos imaginar que queremos remover Crixus e Amora
// Sabemos que eles sao os 2 ultimos, então vamos criar um novo array, começando do 0 e indo ate o -2
const novaFamilia = familia.slice(0,-2)
console.log(novaFamilia) // ALLEPH, FERNANDA


// Aqui estamos removendo 
// PRIMEIRO PARAMETRO
// Onde começa a remoção no caso x
// Segundo parametro, quantos vamos remover apos esse
// Ai no caso eu coloco o indice e 1
// Seria remove esse e somente esse.

const indice = familia.indexOf('Outros')
console.log(indice)
const removendoPeloIndice = familia.splice(indice, 1) // Quem foi removido
console.log(removendoPeloIndice) //Outros
console.log(familia) // Nova familia com um removido

// Agora se eu quiser remover somente ele, podemos fazer o