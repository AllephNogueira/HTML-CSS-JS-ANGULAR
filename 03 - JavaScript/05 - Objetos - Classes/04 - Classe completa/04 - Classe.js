class Pessoa { // CLASSE
    nome; // ATRIBUTO
    idade;   // ATRIBUTO
 
    descrever(){ // METODO
        console.log(`Usuario ${this.nome} com: ${this.idade} anos.`)
    }
}


// INSTANCIANDO a PESSOA
const alleph = new Pessoa();

// ADICIONANDO DADOS AOS ATRIBUTOS
alleph.nome = 'Alleph'
alleph.idade = 31

// CHAMANDO OS METODOS

alleph.descrever();

console.log(alleph)