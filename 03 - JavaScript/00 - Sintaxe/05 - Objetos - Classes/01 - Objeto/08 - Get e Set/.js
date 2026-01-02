function Produto(nome, preco, estoque) {
     // Aqui vamos passar a propriedade que queremos travar
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Dizendo que pode ser exibido.
        value: estoque, // Dizendo para exibir tambem o valor
        writable: false, // Posso alterar o valor desse estoque? no caso nao.
        configurable: false // Podemos reconfigurar a propriedade estoque?
    });

    /** Aqui estamos configurando os atributos e fazendo o get e o set. */
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            configurable: true,
            get: function(){
                return nome
            },
            set: function(valor){
                this.nome = valor
            }
        },
        preco: {
            enumerable: true,
            configurable: true,
            get: function(){
                return nome
            },
            set: function(valor){
                if(typeof valor !== 'number'){
                    console.log('Digite um valor valido.')
                    return;
                } 
                this.preco = valor
            }
        }
    })
}

const p1 = new Produto('camisa', 20, 3)
p1.valor = 30 // Nao vai alterar pq proibimos de alterar.
console.log(p1.valor)
