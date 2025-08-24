class Usuario {
    nome;
    sobrenome;
    idade;

    constructor (nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = 2025 - idade
    }

    apresentacao(){
        console.log(`Ola ${this.nome} ${this.sobrenome} você tem ${this.idade}`)
    }
}

const alleph = new Usuario('Alleph', 'Nogueira', 1994)
const fernanda = new Usuario('Fernanda', 'Ferreira', 1996)

console.log(alleph)
alleph.apresentacao();


// COMPARAR PESSOAS PASSANDO 2 OBJETOS
/* Pessoa é o objeto que estamos recebendo.
repara que ali temos que passar o atributo que estamos usando. */
function compararIdadeUsuarios(pessoa1, pessoa2){
    if(pessoa1.idade > pessoa2.idade) {
        console.log(`Usuario ${pessoa1.nome} tem a idade maior`)
    }else {
        console.log(`Usuario ${pessoa2.nome} tem a idade maior`)
    }
}

compararIdadeUsuarios(alleph, fernanda); // MANDANDO O OBJETO