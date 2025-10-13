

function calculandoIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear()
    const idade = anoAtual - anoNascimento
    try {
        if (typeof anoNascimento !== 'number') throw new Error('Você precisa enviar numeros');
        if (idade < 0) throw new Error('A idade não pode ser negativa.');
        return anoAtual - anoNascimento
    } catch (erro) {
        console.log('Error:')
    }
}

const minhaIdade = calculandoIdade(1994)
console.log(minhaIdade)
