function criaCalculadora(){
    return {
        display : document.querySelector('.display'),
        



        inicia() {
            alert('Oi, iniciei')
            this.display.focus();
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target; // Aqui é para a gente saber o que estou clicando dentro da pagina

                console.log(this)

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    /** Se clicar em cima de algo e esse algo for a classe CLEAR
                     * Vamos apagar todo o display
                     */
                    this.apagarTodoDisplay();
                    console.log('CLEAR ATIVADO')
                }

                if(el.classList.contains('btn-del')) {
                    this.deletarUltimoItem()
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            }.bind(this)); 
            /** Aqui estavamos apontando para o this (documento)
            Dessa forma agora estamos apostando para o THIS -- Calculadora que é nosso objeto. */
        },

        btnParaDisplay(valor){
            /** Agora estamos capturando o valor de onde o usuario clicou
             * E passando o HTML desse campo para ca
             * E colocando no display.
             * Estamos acumulando tudo isso no display.
             */
            this.display.value += valor
        },

        apagarTodoDisplay(){
            this.display.value = ''
        },

        deletarUltimoItem() {
            /** Aqui estamos apagando o ultimo item da nossa calculadora. */
            this.display.value  = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)
                if(!conta) {
                    alert('Conta inválida')
                    return;
                }
                this.display.value = conta
            }catch(e) {
                alert('Conta inválida')
            }
        },

        pressionaEnter(){ 
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },
    };
};

const calculadora = criaCalculadora();
calculadora.inicia();