// O que é?
//É uma função especial usada com new para criar instâncias de objetos.


// Fabrica = retorna objetos
// Construtora = cria objetos.

/** Lembrar que devemos aqui começar com a letra MAISUCULA igual a classe. 
 * Aqui nao vamos precisar chamar o return o proprio javascript já vai criar para a gente.
 * Ficando dessa maneira, para criar uma nova pessoa, temos que usar a palavra new.
 * 
 * Lembrar que quando criamos uma variavel dentro do construtor, ela so vai ficar disponivel ali dentro
 * Não vamos poder chamar ela do lado de fora, exemplo é o ID
*/
function Pessoa(nome, sobrenome) {
    const ID = 123456789;
    const metodoInterno = function(){
        console.log('Esse método é interno.')
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(`Ola ${this.nome} esse é seu método.`)
    }
}

const p1 = new Pessoa('Alleph', 'Nogueira');
const p2 = new Pessoa('Fernanda', 'Ferreira');
console.log(p1)

// METODO
p1.metodo();