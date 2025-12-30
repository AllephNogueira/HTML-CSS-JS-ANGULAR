// Quando queremos remover de um item ate o final do array
            // 0 1 2 3 4 5 6 
const array = [1,2,3,4,5,6,78,9,15,51,48,15,12,48]

// Imagina que queremos remover do item 6 a diante
// Ou seja, ele vai começar a remover a partir do indice 5 ate o final do array.
array.splice(5, Number.MAX_VALUE)
console.log(array)