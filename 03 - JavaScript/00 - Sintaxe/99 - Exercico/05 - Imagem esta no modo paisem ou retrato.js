/** é Paisagem? 
 * Vamos escrever uma funçao que recebe 2 numeros.
 * Vamos calcular e vamos definir se essa imagem esta em modo paisagem ou não
 * 
 * Paisagem: Largura deve ser maior
 * 
 * Retraro: Altura deve ser maior
 */

const isPaisagemTeste = (largura, altura) => largura > altura? 'Paisagem' : 'Retrato';


console.log(isPaisagemTeste(600,150))
console.log(isPaisagemTeste(150,700))

// Agora queremos saber apenas se é verdade ou não

const isPaisagem = (largura, altura) => largura > altura ? true : false ;
console.log(isPaisagem(600,150))
console.log(isPaisagem(150,350))


// CODIGO DO PROFESSOR
function isPaisagem3(largura, altura){
    return largura > altura // Aqui ja retornaria falso ou verdadeiro.
    // Agora se voce manda imagem quadrada, onde os 2 valores sao iguais, voce deve usar o >=
}
console.log(isPaisagem3(1920,1080))