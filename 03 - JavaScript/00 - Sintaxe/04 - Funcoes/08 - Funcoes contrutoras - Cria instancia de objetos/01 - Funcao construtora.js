// Repara que a funcao construtora é uma função que vamos criar um objeto.

function Pessoa(nome, nascimento) {
    this.nome = nome;
    this.nascimento = nascimento;


    this.calcularIdade = function(){
        const anoAtual = new Date().getFullYear();
        return anoAtual - nascimento
    }
    this.apresentar = function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.calcularIdade()}`)
    }
}

const usuario1 = new Pessoa('alleph', 1994)
usuario1.apresentar();