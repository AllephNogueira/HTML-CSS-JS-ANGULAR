// Imagina que estamos tentando executar uma variavel que nao existe
// Vamos ter um erro.

// Try = tente executar isso aqui.
// Se voce nao conseguir, caia no bloco catch
// Basicamente é isso.


try {
    console.log(naoExiste)
}catch(erro) {
    console.log('Nao existe essa variavel.')
    // Podemos salvar esse erro em um banco de dados, mas não é legal exibir para o usuario
    // Aqui vamos exibir, mas imaginando que seria um log salvo em um arquivo.
    console.log(erro)
}