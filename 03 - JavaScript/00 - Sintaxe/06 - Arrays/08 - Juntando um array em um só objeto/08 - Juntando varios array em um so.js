// Imagina que temos uma frase e dessa frase queremos criar um array

const frase = "Seja bem vindo ao meu natal"
// Como vamos identificar o array? nesse caso vai ser pelo espaço
// Poderiamos pegar também valores separado por virgula
// Por ponto...
const novoArray = frase.split(' ')
console.log(novoArray) //[ 'Seja', 'bem', 'vindo', 'ao', 'meu', 'natal' ]

// Aqui dentro podemos definir o que vai ser o separador
const juntandoTudoParaUmaFrase = novoArray.join(' + ')
console.log(juntandoTudoParaUmaFrase)