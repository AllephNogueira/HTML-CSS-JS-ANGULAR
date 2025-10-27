/** Essa é uma função para criar um objeto. 
 * Também estamos aproveitando para criar um método.
 * Existe duas maneiras de criar método dentro da função de objetos
 * 
 * 
 * Outras formas de pegar referencia dos parametros para os atributos
 * 
 * Agora vamos criar outros métodos com altura e peso
 * 
 * Usamos também getter para fazer o metodo virar um atributo e nao precisar dos parantereses para chamar eles.
 * 
 * Também criamos um setter para poder modificar os valores.
 * 
 * 
 * Resumindo, repara que criamos uma funçao para criar objetos, imagina fazer isso diretamente no codigo
 * Dessa forma vai ser criada sempre objetos com seus métodos.
*/

function criaPessoa(nome, idade, sexo, a, p) {
    return {
        nome,
        idade,
        sexo,
        apresentacao() { // FORMATO 1
            return `Seja bem-vindo ${this.nome}`
        },
        fala: function (assunto) { // FORMATO 2
            return `${nome} esta falando sobre ${assunto}`
        },
        confirmarIdade() {
            return `Sua idade é: ${idade}`
        },
        idade: 30,
        altura: a, // RECEBE
        peso: p, // RECEBE

        get imc() { // Resumindo a palavra get a baixo.
            /** Nosso IMC ele é um método da classe
             * Mas imagina se a gente quisesse que ele fosse um atributo?
             * para a gente capturar os dados dele sem precisar usar o ()
             * apenas chamar usando o usuario.imc
             * Precisamos apenas colocar a palavra get na frente dele.
             * 
             * Resumindo get para apenas pegar o valor
             * Setter para configurar algum valor, lembrar do Java.
             */
            return (this.peso / (this.altura * this.altura)).toFixed(2);
        },
        get nomeESexo(){
            /** Criando um get que retorna o nome completo */
            return this.nome + ' ' + this.sexo
        },

        set nomeESexo(valor){
            // Agora vamos imaginar que o usuario esta mandando dois valores para ca
            // Que seria nome e sexo, mas ele esta mandando tudo junto.
            // Então vamos separar esses valores 
            const valores = valor.split(' ')
            // onde tiver espaço ele vai quebrar para gente
            console.log(valores)
            // Se tiver mais de 2 elementos no array? podemos remover eles.
            if(valores.length > 2) {
                valores.splice(2) // Remove todos elementos a apartir do indice 2
            }

            // agora vamos pegar esses valores, que virou um array e adicionar a variavel
            // Se eles chegaram com os dados, usamos os valores deles mesmo, se não colocamos um valor padrao.
            this.nome = valores[0] ? valores[0] : 'Não contem nome'
            this.sexo = valores[1] ? valores[1] : 'Não contem sexo'
            // Agora vamos imprimir novamente
            console.log(`Novo nome: ${this.nome} - sexo: ${this.sexo}`)
        }
        
    };
}

const pessoa1 = criaPessoa('Alleph', 31, 'M', 1.80, 82);
/* console.log(pessoa1);
console.log(pessoa1.apresentacao());
console.log(pessoa1.fala('Programação')); // chamando nosso método.
console.log(pessoa1.confirmarIdade());
console.log(pessoa1.imc);
console.log(pessoa1.nomeESexo) */

pessoa1.nomeESexo = 'Crixus Macho sadas sadasd';

console.log(pessoa1.nomeESexo)

