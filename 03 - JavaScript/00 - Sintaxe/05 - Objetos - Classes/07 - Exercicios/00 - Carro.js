// Desafio para saber quanto gastamos em uma viagem.

class Carro {
    marca;
    cor;
    gastoMedioPorLitro;
    valorCombustivel;
    kmRodado;
    gastoEmReal;

    constructor(marca, cor) {
        this.marca = marca;
        this.cor = cor;        
    }

    calculoGastoDeViagem(kmRodado, gastoMedioPorLitro, valorCombustivel) {
        this.kmRodado = kmRodado;
        this.gastoMedioPorLitro = gastoMedioPorLitro;
        this.valorCombustivel = valorCombustivel
        return this.gastoEmReal = (kmRodado / gastoMedioPorLitro) * valorCombustivel
    }

    quantoGastoPorLitro(){
        return (this.valorCombustivel / this.gastoMedioPorLitro).toFixed(2) + ' Centavos.';
    }

    exibirMensagem(){
        
        console.log(`Voce rodou um total de ${this.kmRodado} fazendo uma média de ${this.gastoMedioPorLitro} por litro.`)
        console.log(`Você gastou um total de ${this.gastoEmReal.toFixed(2)}R$ `)
    }

}

const usuarioCarro = new Carro('Onix', 'Branco')
usuarioCarro.calculoGastoDeViagem(300, 12, 4.09);
console.log(usuarioCarro.quantoGastoPorLitro());

usuarioCarro.exibirMensagem()