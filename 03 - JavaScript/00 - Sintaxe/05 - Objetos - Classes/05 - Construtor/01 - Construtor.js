
/** Diferença de objetos para Classe
 * Repara que nesse exemplo aqui o objeto, ja temos os dados definidos nele
 * Classe é um modelo de objeto, mas que ainda nao tem os dados, vamos precisar definir eles ainda
 *  Usando por exemplo um construtor
 *  Usando por meio de um new e depois adicionando os itens.
 */


class Carro {
    marca;
    modelo;

    constructor() {
        this.marca = 'GM' // COLOCANDO UM PADRAO AQUI
        this.modelo = 'Onix'
    }
}

const carro1 = new Carro()
console.log(carro1)

// Agora obrigando a passarem os dados no construtor
// Sempre quando uma pessoa for instanciada, devemos passar os atributos.
class Carro2 {
    marca;
    modelo;

    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }
}

const carro2 = new Carro2('Ford', 'Fiesta')
console.log(carro2)

// Deixando sem dados
// Dessa forma colocamos um padrao, ou vai ser a variavel, ou vai ser o vazio.
class Carro3 {
    marca;
    modelo;

    constructor(marca = '', modelo = '') {
        this.marca = marca
        this.modelo = modelo
    }
}

const carro3 = new Carro3('Ford', 'Fiesta')
console.log(carro3)

// Fazendo uma conta direto no construtor
class Carro4 {
    marca;
    modelo;
    anoCarro;
    idadeCarro;

    constructor(marca = '', modelo = '', anoCarro) {
        this.marca = marca
        this.modelo = modelo
        this.anoCarro = anoCarro
        this.idadeCarro = 2025 - this.anoCarro // FAZENDO UMA CONTA DIRETO NO CONSTRUTOR.
    }
}

const carro4 = new Carro4('Citroen', 'C4', 2016)
console.log(carro4)

