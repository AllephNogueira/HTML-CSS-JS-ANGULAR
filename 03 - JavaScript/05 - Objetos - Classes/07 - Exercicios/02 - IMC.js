class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        // Altura deve estar em metros, ajuste se necessário
        return this.peso / ((this.altura / 100) ** 2);
    }

    exibirIMC() {
        console.log(`Ola ${this.nome} seu IMC é: ${this.calcularIMC().toFixed(2)}`)
    }
}

const usuario = new Pessoa('alleph', 82.00, 180)
usuario.exibirIMC();    