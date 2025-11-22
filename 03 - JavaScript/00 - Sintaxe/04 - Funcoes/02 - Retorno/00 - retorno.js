function somar(a,b) {
    return a + b
}

console.log(somar(10,5))


function somar2(a , c) {
    console.log(a + c)
}

somar2(10,35)

// RETORNANDO UM OBJETO
function criarPessoa(nome, sobrenome){
    return { nome: nome, sobrenome: sobrenome }
}
console.log(criarPessoa('alleph', 'nogueira')) // IMPRIMIR O OBJETO

const p1 = criarPessoa('Fernanda', 'Ferreira') // CHAMANDO A FUNCAO PARA CRIAR O OBJETO
console.log(p1.nome)