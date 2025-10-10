let i = 0;

// Enquanto a condição for verdadeira ele continua executando
// QUando a condição entra em falso ele sai do loop
// i é < 10? verdade, porque i começa com 0, entao ele é menor que 0
// Vamos incrementando ele ate que ele se torne maior ou igual.
// Ai vamos perguntar de novo, i é menor que 10?
// Se i passa a ser 11 ele não é menor, então a condição é falsa e ele sai do loop
while(i <= 10){
    console.log(i)
    i++
}

console.log('O valor final de i é: ', i);

// Crie uma funçao que descubra quantas tentativas precisam para acertar uma senha de 4 digitos
// Enquanto a situação aqui for verdadeira ele vai continuar repetindo.
// i é diferente da senha? logico que é, então repete..
// ate que a condição seja falsa
// ou seja, i = 3912 senha 3912 é diferente? falso, porque eles dois sao parecidos, então ele sai do loop

function descobrindoSenha(senha) {
    let i = 0;
    while(i !== senha ){
        i++
        console.log(i)
    }
}

//descobrindoSenha(3912)


// Também temos o do While
// Como funciona o while vai verifcar se a condiçao é verdadeira e vai executar o codigo
// o do while, vai executar o codigo primeiro e depois vai verificar se é verdadeiro.
// Aqui ele vai executar ate o 5
// Porque primeiro executamos o codigo e depois verificamos.

let contador2 = 0
do {
    contador2++
    console.log(contador2)
} while(contador2 < 5);