const botaoCalcular = document.querySelector('.calcular')
const cores = ['red', 'laranja', 'amarelo', 'amarelo-verde', 'verde', 'abaixo-do-peso', 'cinza']

class Usuario {
    peso;
    altura;

    constructor(peso, altura) {
        this.peso = parseFloat(peso)
        this.altura = parseFloat(altura)
    }

    calcularIMC() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    mudarACor() {
        const imc = this.calcularIMC();

        switch (true) {
            case imc < 18.5:
                return 'abaixo-do-peso'; // Abaixo do peso

            case imc >= 18.5 && imc <= 24.9:
                return 'verde'; // Peso normal

            case imc >= 25 && imc <= 29.9:
                return 'amarelo-verde'; // Sobrepeso

            case imc >= 30 && imc <= 34.9:
                return 'amarelo'; // Obesidade grau 1

            case imc >= 35 && imc <= 39.9:
                return 'laranja'; // Obesidade grau 2

            case imc >= 40:
                return 'red'; // Obesidade grau 3

            default:
                return 'cinza'; // Valor inválido ou não previsto
        }
    }
}


botaoCalcular.addEventListener('click', click => {
    click.preventDefault();
    // Primeiro devemos remover a classe antes de adicionar uma outra.
    const informacao = document.querySelector('.informacao')
    informacao.classList.remove(...cores)

    const peso = document.querySelector('.peso').value.replace(',', '.');
    const altura = document.querySelector('.altura').value.replace(',', '.');
    const usuario = new Usuario(peso, altura)
    if (!isNaN(usuario.calcularIMC())) {
        /**
         * O que estou fazendo aqui, se NÃO for isNaN
         * Ele entra aqui.
         */

        informacao.innerHTML = `Seu calculo IMC é ${usuario.calcularIMC()}` // Adiciona um novo texto.
        console.log(usuario.mudarACor())
        informacao.classList.add(usuario.mudarACor()) // Adiconar uma nova classe.

    } else {
        informacao.innerHTML = `Valor inválido` // Adiciona um novo texto.
        console.log(usuario.mudarACor())
        informacao.classList.add(usuario.mudarACor()) // Adiconar uma nova classe.
    }

});
