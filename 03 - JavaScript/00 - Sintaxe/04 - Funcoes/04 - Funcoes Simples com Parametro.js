function nomeUsuario(nome){
    console.log(`Nome usuario conectado é ${nome}`)
};


function nomeUsuarioRetornando(nome){
    return `Nome usuario conectado é ${nome}`
};


function ehMaiorDeIdade(anoNascimento, anoAtual){
    const idade = anoAtual - anoNascimento
    return idade > 18
}

function liberarConteudo(anoNascimento, anoAtual) {
    if(ehMaiorDeIdade(anoNascimento, anoAtual)){
        // Aqui estamos chamando uma funçao, mas para isso, essa funçao precisa retornar algo.
        console.log('Conteúdo liberado!' + nomeUsuarioRetornando('Alleph'))
    }else {
        console.log('Conteúdo trancado!')
    }
}

console.log(ehMaiorDeIdade(1994, 2025))
liberarConteudo(1994, 2025)

