// Aluno para passar de serie precisa ter uma nota igual ou maior a 20 pontos
// Precisamos pegar as notas somar e dividir para saber qual sua media.

const nota1 = 10
const nota2 = 5
const nota3 = 5.5
const nota4 = 8


const notaTotal = nota1 + nota2 + nota3 + nota4
const quantidadeDeAvaliacoes = 4
const mediaDoAluno = notaTotal / quantidadeDeAvaliacoes

if (mediaDoAluno < 5) {
    console.log("Reprovado")
    console.log(`Sua media foi: ${mediaDoAluno}`)
}else if(mediaDoAluno >= 5 && mediaDoAluno <= 7){
    console.log("Recuperação")
    console.log(`Sua media foi: ${mediaDoAluno}`)
}else {
    console.log("Aprovado")
    console.log(`Sua media foi: ${mediaDoAluno}`)
}
