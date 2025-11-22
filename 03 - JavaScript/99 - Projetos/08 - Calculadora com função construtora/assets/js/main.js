function Calculadora(){

    this.display = document.querySelector('.display');


    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            // Estamos pegando o botao que esta sendo pressionado e jogando dentro da variavel
            const evento = event.target;
            if(evento.classList.contains('btn-num')) this.addNumDisplay(evento);
            if(evento.classList.contains('btn-clear')) this.clear();
            if(evento.classList.contains('btn-del')) this.del();
            if(evento.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.addNumDisplay = evento => this.display.value += evento.innerText;
    this.clear = () => this.display.value = '';
    this.inicia = () => this.capturaCliques();
    this.del = () => this.display.value = this.display.value.slice(0, -1); // PEGANDO O ULTIMO ELEMENTO E REMOVENDO
    this.realizaConta = function(){
        // EVAL = vai pegar tudo que tem dentro, com operador e vai calcular.
        // Imagina que tenha uma string (10+5+5) ele vai calcular tudo isso.
        const conta = eval(this.display.value);
        this.display.value = conta
    }

};

const calculadora = new Calculadora();
calculadora.inicia();