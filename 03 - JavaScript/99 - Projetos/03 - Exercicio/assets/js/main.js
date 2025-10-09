
const section = document.querySelector('section');
const elementos = [
  {tag: 'p', texto: 'Este é um parágrafo de exemplo para exibir conteúdo textual.'},
  {tag: 'div', texto: 'Esta div pode conter múltiplos elementos ou servir como contêiner.'},
  {tag: 'footer', texto: 'Rodapé da página com informações adicionais ou links úteis.'},
  {tag: 'section', texto: 'Seção dedicada a um tópico específico dentro do layout.'},
];


// Se quiser acessar os objeto de forma individual
// Devemos acessar o array
// Repara que exemplo, acessamos o primeiro objeto que esta dentro do array
// Depois acessamos o atributo desse objeto.
const acessandoArray = elementos[0].texto


for (let index = 0; index < elementos.length; index++) {
    const element = elementos[index];
    console.log(element.tag, element.texto)
    // Criando a tag com o nome que vem do objeto
    const novaTag = document.createElement(`${element.tag}`)
    // Adicionando a tag dentro da section como se fosse filha
    section.appendChild(novaTag)
    // Adicionando o texto na tag criada
    novaTag.textContent = element.texto

}
