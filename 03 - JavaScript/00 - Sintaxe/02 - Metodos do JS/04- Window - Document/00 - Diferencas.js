// O objeto `window` representa a janela do navegador.
// Com ele, podemos interagir com a interface do usuário, como exibir alertas e capturar entradas.
// Importante: o `window` só funciona no ambiente do navegador, não no Node.js ou diretamente no VSCode.

window.alert('Bem-vindo!'); 
// Exibe um alerta assim que o usuário acessa o site.

window.confirm('Você realmente deseja apagar esse documento?'); 
// Exibe uma caixa de confirmação. Retorna `true` se o usuário clicar em "OK" e `false` se clicar em "Cancelar".

window.prompt('Digite o seu nome'); 
// Exibe uma caixa de entrada para o usuário digitar algo. O valor digitado pode ser armazenado em uma variável.

// Podemos omitir o uso explícito de `window`, já que seus métodos são globais:
const confirmar = confirm('Você deseja apagar essa foto?');
// Armazena o resultado da confirmação em uma variável. Pode ser usado para tomar decisões com base na resposta do usuário.


// O objeto `document` representa o conteúdo HTML da página.
// Com ele, podemos acessar e manipular elementos do DOM (Document Object Model).

// Exemplos de uso do `document` (você pode adicionar mais conforme for estudando):
// document.getElementById('meuElemento') → seleciona um elemento pelo ID
// document.querySelector('.minhaClasse') → seleciona o primeiro elemento com a classe especificada
// document.body.style.backgroundColor = 'blue' → altera o fundo da página
