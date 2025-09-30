// Com variaveis
const nome = 'Alleph';
const sobrenome = 'Nogueira';
const idade = 31;
const peso = 82;
const altura = 1.80
let imc = peso / (altura * altura)
let anoDeNascimento = 2025 - idade

console.log(`IMC: ${imc.toFixed(2)} - nascimento: ${anoDeNascimento}`)

/** Fazendo com classe */
class Pessoa {
    nome;
    sobrenome;
    idade;
    peso;
    altura;

    constructor(nome, sobrenome, idade, peso, altura){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    
    descobrirAnoNascimento() {
        return 2025 - this.idade;
    }
    calcularImc(){
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }
    mensagem(){
        return `${this.nome} ${this.sobrenome}, nascido em ${this.descobrirAnoNascimento()} pesa ${this.peso}kg tem o IMC de: ${this.calcularImc()}`
    }
}

const usuario = new Pessoa()
usuario.nome = 'Alleph';
usuario.sobrenome = 'Nogueira'
usuario.idade = 31
usuario.peso = 82
usuario.altura = 1.80

console.log(usuario.mensagem())
// Outra forma mais resumida com o construtor

const usuarioConstrutor = new Pessoa('Fernanda', 'Ferreira', 28, 58, 1.65)
console.log(usuarioConstrutor.mensagem())