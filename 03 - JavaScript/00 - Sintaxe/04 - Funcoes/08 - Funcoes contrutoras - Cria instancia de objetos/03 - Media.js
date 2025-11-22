function Aluno(nome, nota1, nota2) {
    this.nome = nome
    this.nota1 = nota1
    this.nota2 = nota2

    this.media = function(){
        const media = nota1 + nota2
        return media / 2
    }

    this.aprovadoOuNao = function(){
        if(this.media() > 6) {
            return 'Aprovado'
        }else {
            return 'Reprovado'
        }
    }

    this.detalhesAluno = function(){
        if(this.aprovadoOuNao() === 'Aprovado'){
            return `Aluno ${this.nome} teve a média de: ${this.media()} `
        }else {
            return 'Que pena...\nVocê foi reprovado...'
        }
        
    }
}

const aluno1 = new Aluno('Alleph', 3, 8)
console.log(aluno1.detalhesAluno())