const pessoa2 = {
    nome: 'Alleph',
    idade: 31,
    estado: 'RJ'
}


// adicionando um metodo 
// Lembrar que usando o this, estamos dizendo para ele fazer referencia ao objeto.
pessoa2.falarNome = function(){
    return (`${this.nome} está falando seu nome`)
}
pessoa2.descobrirIdade = function(){
    const anoAtual = new Date().getFullYear()
    return anoAtual - this.idade
}

console.log(pessoa2.falarNome())
console.log(pessoa2.descobrirIdade())

