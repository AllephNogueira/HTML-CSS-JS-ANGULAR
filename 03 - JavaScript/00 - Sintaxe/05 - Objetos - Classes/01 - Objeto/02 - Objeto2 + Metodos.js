const pessoa = {
    nome: 'Alleph',
    sobrenome: 'Nogueira',
    idade: 25
};

const pessoa2 = {
    nome: 'Crixus',
    sobrenome: 'Nogueira',
    idade: 9
};



console.log(pessoa.nome)
console.log(pessoa2.nome)

/**
 * Também podemos criar uma funçao para criar um objeto
 * Agora observa que em vez de ficar criando varios objetos
 * Estamos criando apenas uma funçao e invocando ela com os dados
 * Como se fosse um construtor.
 */

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa3 = criarPessoa('Fernanda', 'Ferreira', 29)
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade)


// Metodos do objeto
/** Oberva que para criar um metodo, não usamos a palavra function
 * Apenas chamamos o nome dela.
 */

const pessoa4 = {
    nome: 'Alleph',
    sobrenome: 'Nogueira',
    idade: 25,

    fala (){
        return `Me chamo ${this.nome} ${this.sobrenome}` 
    }
};

console.log(pessoa4.fala())