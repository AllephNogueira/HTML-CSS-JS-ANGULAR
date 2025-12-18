const familia = ['Alleph', 'Fernanda', 'Crixus', 'Amora']
// FATIANDO
// Vamos imaginar que queremos pegar o indice 1 e ir ate o 2
// Nesse caso iria começar em fernanda e ir ate crixus
// Mas o indice final nao é incluido, então para isso, precisamos ir de 1 ate 3

const fatiado = familia.slice(1,3)
console.log(fatiado)


// Agora vamos imaginar que queremos remover Crixus e Amora
// Sabemos que eles sao os 2 ultimos, então vamos criar um novo array, começando do 0 e indo ate o -2
const novaFamilia = familia.slice(0,-2)
console.log(novaFamilia)