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

    form.addEventListener('submit', evento => {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value.trim();
        const sobrenome = form.querySelector('.sobrenome').value.trim();
        const peso = form.querySelector('.peso').value.trim();
        const altura = form.querySelector('.altura').value.trim();
        /**
         * Precisamos criar um objeto 
         * Jogar todos esses objetos dentro do array
         * Imprimir esse objeto
         */

        // Criando o objeto pessoa
        const pessoa = { nome, sobrenome, peso, altura };
        // Adicionando dentro do array
        arrayPessoasCadastradas.push(pessoa)

        // 3 Pega o tamanho do array e diminui -1
        // Se o array tiver 1 usuarios
        // Ele vai identificar que esse array tem 1
        // Mas na verdade seu indice é 0
        // Então para acessar o indice 0 pegamos o tamanho -1
        const index = arrayPessoasCadastradas.length - 1;

        resultado.innerHTML += `
        <p>
            <strong>${index} - Nome:</strong> ${pessoa.nome}<br>
            <strong>Sobrenome:</strong> ${pessoa.sobrenome}<br>
            <strong>Peso:</strong> ${pessoa.peso} kg<br>
            <strong>Altura:</strong> ${pessoa.altura} cm
        </p>
        `;



        console.log(arrayPessoasCadastradas[index])

        // Apos tudo ser escrito, vamos limpar os campos
        form.reset();
    })
}

meuEscopo();
