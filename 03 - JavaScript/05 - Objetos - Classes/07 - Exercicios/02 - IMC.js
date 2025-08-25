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

    classificarIMC(){
        if(this.calcularIMC() < 16 ){
            console.log('Magreza leve')
        }else if(this.calcularIMC() < 16.9) {
            console.log('Magreza moderada')
        }else if(this.calcularIMC() < 18.4) {
            console.log('Magreza leve')
        }else if(this.calcularIMC() < 24.9) {
            console.log('Peso normal')
        }else if(this.calcularIMC() < 29.9) {
            console.log('Sobrepeso')
        }else if(this.calcularIMC() < 34.9) {
            console.log('Obesidade grau I')
        }else if(this.calcularIMC() < 39.9) {
            console.log('Obesidade grau II')
        }else if(this.calcularIMC() > 39.9) {
            console.log('Obesidade grau III')
        }else {
            console.log('Não conseguimos calcular.')
        }
    }

    exibirIMC() {
        console.log(`Ola ${this.nome} seu IMC é: ${this.calcularIMC().toFixed(2)}`)
    }
}

const usuario = new Pessoa('alleph', 80.00, 180)
usuario.exibirIMC();    
usuario.classificarIMC();