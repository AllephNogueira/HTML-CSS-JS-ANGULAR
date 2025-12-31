const pessoa1 = new Object();
pessoa1.nome = 'Alleph';
pessoa1.idade = 31;
pessoa1.estado = 'RJ';

// Estamos criando e adicionando
// Pegando os dados de forma dinamica, imagina que esta vindo do banco
const bancoDeDadosInformacaoNome = 'nome'
const bancoDeDadosInformacaoIdade = 'idade'
const bancoDeDadosInformacaoEstado = 'estado'

// Agora criando de forma literal
const pessoa2 = {
    nome: 'Alleph',
    idade: 31,
    estado: 'RJ'
}

console.log(pessoa1[bancoDeDadosInformacaoNome], pessoa1[bancoDeDadosInformacaoIdade], pessoa1[bancoDeDadosInformacaoEstado])