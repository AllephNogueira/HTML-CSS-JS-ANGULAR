function meuEscopo() {
    /** No querySelector podemos selecionar ID, classes, tags..
     * document.querySelector('#form') ID
     * document.querySelector('.form') Classe
     * document.querySelector('form') Tag
     * Podemos usar ele para selecionar tudo.
     */
    const form = document.querySelector('.form')


    /** 
    form.onsubmit = function (evento) {
    /**
     * Quando clicar no botao de enviar, algo tem que acontecer.
     * E nesse caso estamos dizendo que quando clicar vamos ter um alert.
     * 
     * preventDefault == Estamos dizendo que quando o botao for clicado não queremos que o navegador    recarregue a pagina para o padrao.
     * 
     
        evento.preventDefault();
        alert('1')
    };
    */

    /**
     * Outra maneira de fazer e mais atual e dessa forma
     * Estamos dizendo que queremos ouvir quando houver um evento dentro de form
     * E o tipo do evento vai ser o de submit == enviar.
     * 
     * E vamos inicar uma funçao quando isso acontecer {}
     * Podemos chamar uma funçao ali
     * Que pode ser anonima ou pode ser uma funçao de fora.
     */
    let contador = 1
    function naoAtualizarPagina(evento) {
        console.log(`Quantidade de cliques ${contador++}`);
        evento.preventDefault();
    }
    form.addEventListener('submit', naoAtualizarPagina) // Nome da funçao que estamos chamando.

    /** Outra maneira de fazer, fazendo tudo junto
     Aqui passamos o parametro e depois a funçao sem precisar escrever o nome dela.
    form.addEventListener('submit', evento => {
        console.log(`Quantidade de cliques2 ${contador++}`);  
        evento.preventDefault();
    })

    */

    // Cada vez que o formulario e clicado, vamos capturar os dados
    /*         form.addEventListener('submit', evento => {
            console.log(`Contagem de cliques ${contador++}`)
            evento.preventDefault();
        })
     */


    /** Ja tinhamos pego a referencia do formulario, agora dentro do formulario estamos pegando os inputs que esta dentro dele
     * 
     *     const form = document.querySelector('.form')

    let contador = 1;
    form.addEventListener('submit', evento => {
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        console.log(`Contagem de cliques ${contador++}`)
        evento.preventDefault();
    })


}
     */
}

meuEscopo();