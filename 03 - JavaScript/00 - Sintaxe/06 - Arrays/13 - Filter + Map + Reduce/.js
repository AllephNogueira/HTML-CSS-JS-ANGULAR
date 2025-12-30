// Agora vamos unir os 3
// Filtrando valores
const array = [10,5,1,4,41,4,4,4,4,8,2,20,4,5,9,1,4545,564,48,15,486,15,456]
const pares = array.filter(numero => numero % 2 === 0)
console.log(pares)
const impares = array.filter(numero => numero % 2 !== 0)
console.log(impares)


// Map transformando valores
const dobrandoOsNumeros = array.map((numero, valor) => numero + numero )
console.log(dobrandoOsNumeros)

// Acumulando todos os valores 

const acumulandoValores = array.reduce((acumulador, valor) => {
    return acumulador += valor
},0)
console.log(acumulandoValores)


// Agora fazendo questoes
// Retorne a soma do dobro de todos os pares
// Primeiro vamos filtrar
// Com o filtro vamos dobrar
console.log('USANDO AS 3 OPERACOES DE UMA SÓ VEZ')
/** FILTRAR NUMEROS PARES
 *  DOBRAR NUMEROS PARES
 *  PEGAR O TOTAL DOS NUMEROS PARES
 * 
 * LEMBRAR QUE PODEMOS OMITIR O 0, QUE SERIA O VALOR INICIAL DO ACUMULADOR
 * MAS ISSO PODE GERAR ERROS, SE O PRIMEIRO VALOR TIVER NULL
 * RECOMENDANDO PARA SEGURANÇA SEMPRE INDICAR QUAL TIPO DE DADOS, OU VALOR INICIAL 
 * SE FOR OBJETO {}, SE FOR ARRAY[], SE FOR NUMERO 0
 */
const arrayN = [10,5,1,4,41,4,4,4,4,8,2,20,4,5,9,1,4545,564,48,15,486,15,456]
const somaDoDobroDosPares = arrayN
    .filter(numero => numero % 2 === 0)
    .map(numero => numero + numero)
    .reduce((acumulador, valor) => {
        return acumulador += valor
    },0)
console.log(somaDoDobroDosPares)