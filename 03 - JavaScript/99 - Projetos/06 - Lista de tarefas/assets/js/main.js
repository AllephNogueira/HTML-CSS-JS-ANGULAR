const moradores = [] // Criando a lista
const formulario = document.querySelector('.form-inline'); // Captura o formulário inteiro
const textoEntrada = document.querySelector('.entrada');// Captura o campo de texto
const lista = document.querySelector('.lista') // Nossa lista


// Escuta o evento de envio do formulário
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão

    const valorDigitado = textoEntrada.value; // Captura o texto digitado
    moradores.push(valorDigitado) // Adiciona o morador a lista. 
    console.log(moradores)

    // Agora vamos criar um for, que dependendo da quantidade de pessoas
    // Com isso vamos criar varias listas.

    // Limpa a lista antes de recriar os itens
    lista.innerHTML = '';


    for (let index = 0; index < moradores.length; index++) {
        const element = moradores[index];
        lista.innerHTML += `<li>${element} <button class="apagar">Apagar</button></li>`;

    }

    // Limpa o campo de entrada
    textoEntrada.value = '';



});


lista.addEventListener('click', function(e) {
  if (e.target.classList.contains('apagar')) {
    const item = e.target.parentElement; // <li>
    const nome = item.firstChild.textContent.trim(); // pega o texto do nome
    console.log('Apagando:', nome);

    item.remove(); // remove o item da lista
    // Devemos acessar o nome do morador e remover ele do nosso array
    const indexDoMorador = moradores.indexOf(nome) // Descobrindo o index do morador
    console.log(indexDoMorador)
    // Removendo o index do morador
    // Se encontrar o indice retorna ele se nao encontra retorna -1
    if(indexDoMorador !== -1) {
        // - index → a posição do item que você quer remover (começa do 0).
        //- 1 → quantos itens você quer remover a partir dessa posição.

        moradores.splice(indexDoMorador, 1)
    }

  }
});
