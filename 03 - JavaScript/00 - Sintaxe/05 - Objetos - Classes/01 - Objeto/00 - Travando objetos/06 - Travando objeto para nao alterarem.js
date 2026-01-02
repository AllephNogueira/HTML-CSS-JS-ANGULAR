function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)
    /** Com isso nao podemos criar novos metodos
     * Nao podemos criar novos atributos
     * Ele fica travado, somente pode usar o que ja esta dentro dele
     */
}

const p1 = new Pessoa('Alleph', 'Nogueira') // PODE
const p2 = new Pessoa('Fernanda', 'Ferreira') // PODE

p1.nome = 'Alleph1' // Nao podemos alterar valor
p2.sobrenome = 'Nogueira2' // Nao podemos alterar valor
p1.adicionarNovoAtributo = 'Teste' // Nao podemos adicionar um novo atributo

console.log(p1.nome)
console.log(p1.adicionarNovoAtributo)

// Isso nao podemos fazer, porque o objeto esta travado, ele só vai considerar o que esta dentro do construtor
// Nao podemos criar mais nada aqui fora.

