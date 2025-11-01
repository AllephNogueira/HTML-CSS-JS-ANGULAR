function Calculadora(){
    this.display = document.querySelector('.display');


    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            // Estamos pegando o botao que esta sendo pressionado e jogando dentro da variavel
            const evento = event.target;
        });
    }

    this.inicia = () => {
        this.capturaCliques();
    }

};

const calculadora = new Calculadora();
calculadora.inicia();