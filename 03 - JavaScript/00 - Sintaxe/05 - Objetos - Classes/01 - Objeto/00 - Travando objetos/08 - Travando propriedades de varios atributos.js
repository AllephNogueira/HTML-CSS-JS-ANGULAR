function Produto(nome, preco, estoque) {

    // Aqui estamos configurando apenas um atributo
    // Aqui vamos passar a propriedade que queremos travar
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Dizendo que pode ser exibido.
        value: estoque, // Dizendo para exibir tambem o valor
        writable: false, // Posso alterar o valor desse estoque? no caso nao.
        configurable: false // Podemos reconfigurar a propriedade estoque?
        /** Imagina que essa reconfiguração, seria como se a gente transformasse o estoque em let
         * Podendo criar uma outra configuração e o que vai valer é a ultima
         * 
         * Configurado como false: nao podemos apagar a variavel e reconfigurar ela.
         */
    });

    // Aqui estamos configurando varios atributos
    Object.defineProperties(this, {
        // Dentro do {} é onde vamos colocar as informações do nosso atributo nome:
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

const p1 = new Produto('camisa', 20, 3)
p1.estoque = 3000 // Nao vai alterar pq proibimos de alterar.
delete p1.estoque // Nao podemos apagar porque ela esta configurada para nao configurar.
console.log(p1)

// Outra maneira de ver as chaves
console.log(Object.keys(p1))

// Vamos imaginar que nao queremos deixar disponivel o estoque