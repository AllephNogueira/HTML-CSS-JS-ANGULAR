//  Função tradicional
    function saudacao() {
        let nome = 'Alleph'
        console.log(`Olá ${nome}`)
    }

    saudacao()

// Funcao que vai retornar algo
    function funcaoComRetorno() {
        
        return 1 + 1
    }

    console.log(funcaoComRetorno())

// Função anônima atribuída a uma variável
    const somar = function(a, b) {
        return a + b
    }

    console.log(somar(10,20))


// Arrow Function (função de seta
    // Repara que aqui, usamos uma variavel
    // nessa variavel passamos um parametro
    // Resumindo é como se a funçao se chamasse dobrar e o parametro é numero
    /* Explicação do Copilot
        - const dobrar → cria uma variável que armazena a função.
        - numero => numero * 2 → é a arrow function que recebe um parâmetro (numero) e retorna o dobro.
        - console.log(dobrar(10)) → imprime 20 no console.

    */

    const dobrar = numero => numero * 2
    console.log(dobrar(10))
