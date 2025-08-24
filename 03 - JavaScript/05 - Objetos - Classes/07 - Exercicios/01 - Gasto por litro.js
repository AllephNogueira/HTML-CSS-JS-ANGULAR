// Aqui estamos calculando quanto o usuario gasta para rodar 1KM

class Carro {
    marca;
    cor;
    gastoMedioPorKMm;

    constructor(marca, cor, gastoMedioPorKMm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKMm = gastoMedioPorKMm;
    }

    calculoDeViagem() {

        console.log(`Para rodar 1km, você gasta um total de ${this.gastoMedioPorKMm.toFixed(3)} litro. `)
    }

}

// Fizemos a conta diretamente aqui, fazendo 1 dividido pelo 18 vamos ter a quantidade que gastamos com 1 litro.
const usuarioCarro = new Carro('Onix', 'Branco', 1/18)
usuarioCarro.calculoDeViagem();