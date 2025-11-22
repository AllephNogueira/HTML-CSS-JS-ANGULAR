function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const arrayPessoasCadastradas = []


    //let contador = 1;
    form.addEventListener('submit', evento => {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        /**
         * Precisamos criar um objeto 
         * Jogar todos esses objetos dentro do array
         * Imprimir esse objeto
         */

        arrayPessoasCadastradas = criarObjetoUsuario(nome.value,
            sobrenome.value,
            peso.value,
            altura.value
            /** Não esquecer do value, ele que esta capturando o valor que esta dentro de cada tag, classe, ou id */
        )

        for (let index = 0; index < arrayPessoasCadastradas.length; index++) {
        const element = arrayPessoasCadastradas[index];

        mensagem = `${element.nome} ${element.sobrenome} ${element.peso} ${element.altura}<br>`

        resultado.innerHTML += mensagem

    }



        //imprimirDadosNaPagina(arrayPessoasCadastradas, resultado)

        //depuradorDasInformacoes(objetoUsuario, contador);

    })


}

function criarObjetoUsuario(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura
    }
}

function imprimirDadosNaPagina(arrayPessoasCadastradas, resultado) {
    



}

/* function depuradorDasInformacoes(objetoUsuario, contador) {
    console.log(objetoUsuario.nome,
        objetoUsuario.sobrenome,
        objetoUsuario.peso,
        objetoUsuario.altura)

    console.log(`Contagem de cliques ${contador++}`)

}
 */
meuEscopo();