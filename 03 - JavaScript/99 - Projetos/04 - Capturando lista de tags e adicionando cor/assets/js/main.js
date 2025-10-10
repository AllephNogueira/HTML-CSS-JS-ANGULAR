const paragrafos = document.querySelector('.paragrafo')


// Dentro desses paragrafos vamos ter 4 elementos
// O querySelector ele pega o primeiro elemento que ele encontrar, mas vamos pegar todos os paragrafos que esta dentro dessa classe

const listaDePs = document.querySelectorAll('p')
// Agora aqui dentro vamos ter 4 itens.

listaDePs[0].textContent = 'Exemplo 00'
listaDePs[1].textContent = 'Exemplo 01'
listaDePs[2].textContent = 'Exemplo 02'
listaDePs[3].textContent = 'Exemplo 03'


// Agora o que vamos fazer, vamos pegar a cor do fundo e vamos colocar nesses paragrafos.
// Vamos pegar os estilos que o CSS computou do nosso documento
// Aqui dentro vamos passar de onde queremos pegar.
// Entao nessa estiloBody tem tudo de CSS que foi computado pelo computador.
const estilosBody = getComputedStyle(document.body)
// Agora vamos criar uma variavel para usar o background
const backgroundDoBody = estilosBody.backgroundColor
console.log(backgroundDoBody) // Essa é a cor de fundo que esta no nosso body

// Agora vamos jogar essa cor de fundo no nosso paragrafo

listaDePs[0].style.backgroundColor = backgroundDoBody
listaDePs[0].style.color = 'white'

// Agora fazendo um laço para fazer tudo isso
listaDePs.forEach((valor,index) =>  {
    valor.textContent = `Exemplo do meu parafrago ${index}`
    valor.style.backgroundColor = backgroundDoBody
    valor.style.color = 'white'
})


