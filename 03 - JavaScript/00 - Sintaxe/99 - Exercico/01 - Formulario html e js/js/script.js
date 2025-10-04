/**
 * Informações sobre o desafio:
 * Criar um formulario, pegar os dados que o usuario esta digitando neles
 * Converter esses dados para um objeto
 * Colocar esse objeto dentro de um array
 * Imprimir esse objeto na tela.
 */

function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const arrayPessoasCadastradas = []


    let contador = 0;
    form.addEventListener('submit', evento => {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value
        const sobrenome = form.querySelector('.sobrenome').value
        const peso = form.querySelector('.peso').value
        const altura = form.querySelector('.altura').value
        /**
         * Precisamos criar um objeto 
         * Jogar todos esses objetos dentro do array
         * Imprimir esse objeto
         */

        // 2 Adicionando objeto dentro do array
        arrayPessoasCadastradas.push({
            nome,
            sobrenome,
            peso,
            altura
        })

        // 3 percorrendo o array de objetos.
        
        
        resultado.innerHTML += `${contador} - ${arrayPessoasCadastradas[contador].nome} 
        ${arrayPessoasCadastradas[contador].sobrenome}
        ${arrayPessoasCadastradas[contador].altura}
        ${arrayPessoasCadastradas[contador].peso} <br>`
        contador++;

    })
}

meuEscopo();