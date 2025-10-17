// COM OBJETO
console.log('#######################')
console.log('OBJETO')
    function calcular( {numero1, numero2, numero3} ) {
        console.log(numero1 + numero2 + numero3)
    }

    calcular({numero1: 10, numero2: 20, numero3: 30})

/*     // Também podemos criar o objeto aqui
    // Vai funcionar da mesma maneira, a propria funcao vai entender o que é cada um */
    let objeto = {numero1: 50, numero2: 20, numero3: 30}
    calcular(objeto)


// COM ARRAY
console.log('#######################')
console.log('ARRAY')
    function calcular2 ([valor1, valor2, valor3]) {
        console.log(valor1 + valor2 + valor3)
    }
    calcular2([40,20,30])

/*     // Também podemos fazer um array e enviar, vai funcionar da mesma forma
    /** Entende que o proprio array vai enviar 3 dados, a funcao espera 3 itens de um array
     * Ela mesmo vai dividir index 0 1 e 2
     */ 
    let array = [350,80,30]
    calcular2(array)


/* // AGORA COM RAST OPERATION
// Ou seja vamos ter 3 parametros, se o usuario mandar mais, todo resto vai para o final
// Repara que ele pega 2 parametros e o resto ele cria um array com todo o resto. 
// O que estamos fazendo, estamos recebendo um operador
// Um acumulador que começa com 0
// Estamos recebendo todo o resto no ultimo parametro
// E estamos calculando tudo isso de acordo com o que o usuario manda.
// 
Lembrar que o parametro de resto ele deve  ser o ultimo parametro da funçao*/
console.log('#######################')
console.log('RAST OPERATION')
    function calcular3 (operador, acumulador, ...restoNumeros) {
        console.log(operador, acumulador, restoNumeros)
        for(let numero of restoNumeros) {
            /** Lembrar que o IN retorna os indices
             * OF retorna os elementos em separados
             */
            console.log(numero)
            if (operador === '+') acumulador += numero
            if (operador === '-') acumulador -= numero
            if (operador === '*') acumulador *= numero
            if (operador === '/') acumulador /= numero
            
        }
        console.log(`Valor total: ${acumulador}`)
    }

    calcular3('-', 0, 10,10,30)