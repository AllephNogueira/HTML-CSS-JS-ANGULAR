/**
 * 🧪 Exercício 1: Função simples com callback
Crie uma função chamada saudarUsuario que recebe um nome e uma função callback. A função deve exibir "Olá, [nome]" e depois executar o callback.

 */
function saudarUsuario(nome, callback) {
  console.log(`Olá, ${nome}`)
  if(callback) callback(); // Se existir callback vai ser chamado.
}

saudarUsuario("Alleph", function() {
  console.log("Seja bem-vindo!"); // Esse é nosso callback que vai ser chamado apos imprimir o nome do usuario.
});

/** Agora imagina se nao tivesse o callback */

saudarUsuario('Fernanda')