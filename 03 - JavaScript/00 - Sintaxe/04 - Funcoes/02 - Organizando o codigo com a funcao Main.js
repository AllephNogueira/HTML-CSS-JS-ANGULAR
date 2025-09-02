function calcularIdade(){
    const anoNascimento = 1994
    const anoAtual = 2025
    const idadeAtual = anoAtual - anoNascimento
    return idadeAtual
}

function main(){
    /*
    Podemos lembrar do Kotlin
    Aqui dentro é onde vamos fazer nosso programa principal

    Criamos as funçoes fora
    Colocamos ela aqui dentro
    */

    console.log('Programa principal, devemos colocar o codigo aqui.')
    const idadeUsuario = calcularIdade()
    console.log(idadeUsuario)
}

// Chamamos aqui fora nosso principal
main();



/* EXPLICAÇÃO

Excelente pergunta, Alleph! O uso da função main() nesse exemplo é uma forma organizada e estruturada de construir programas, especialmente útil quando você quer deixar claro onde começa a execução principal do seu código — como acontece em linguagens como Kotlin, Java, C, etc.
Vamos destrinchar isso com clareza:

🧩 Por que usar main()?
- Organização do código
- Separar a lógica principal dentro de main() ajuda a manter o código limpo e modular.
- Funções auxiliares (como calcularIdade) ficam fora, e são chamadas dentro do main().
- Facilidade de leitura
- Quando alguém lê seu código, já sabe que tudo começa no main().
- Isso é especialmente útil em projetos maiores, com muitos arquivos e funções.
- Reutilização e testes
- Você pode chamar main() várias vezes, ou até evitar chamá-la em certos contextos (como testes automatizados).
- Isso dá mais controle sobre quando e como o programa roda.

🧠 Analogia com Kotlin (como você mencionou)
Em Kotlin, o ponto de entrada de um programa é:
fun main() {
    println("Olá, mundo!")
}


Você está replicando essa ideia em JavaScript, mesmo que tecnicamente não seja obrigatório usar main() — já que o JS executa tudo de cima pra baixo. Mas usar main() é uma boa prática de estilo, especialmente se você vem de linguagens mais estruturadas.

🔍 Como o fluxo funciona no seu exemplo
function calcularIdade() {
  const anoNascimento = 1994;
  const anoAtual = 2025;
  const idadeAtual = anoAtual - anoNascimento;
  return idadeAtual;
}

function main() {
  console.log('Programa principal, devemos colocar o código aqui.');
  const idadeUsuario = calcularIdade();
  console.log(idadeUsuario);
}

// Aqui é onde tudo começa
main();


- calcularIdade() é definida, mas não executada ainda.
- main() é definida, e dentro dela você chama calcularIdade().
- Só quando você chama main() no final é que tudo começa a rodar.

Se quiser, posso te mostrar como isso se aplica em projetos maiores, ou como usar main() com funções assíncronas (async/await). Quer seguir por esse caminho?

 */