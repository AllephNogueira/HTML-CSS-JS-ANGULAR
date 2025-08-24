// Temos metodo e funções
// Dentro de um objeto chamamos de metodo.

const usuario = {
    nome : 'Alleph',
    sobrenome : 'Nogueira',

    // METODO
    descreverUsuario: function(){
        console.log(`Meu nome é ${this.nome} e meu sobrenome é: ${this.sobrenome}`)
    }
}


usuario.descreverUsuario();

// CHAMANDO OUTRO USUARIO
usuario.nome = 'Fernanda'
usuario.sobrenome = 'Nogueira'
usuario.descreverUsuario();


// Modifcando o metodo 
usuario.descreverUsuario = function(){
    console.log('Redefinindo o metodo')
}
usuario.descreverUsuario(); // Out: Redefinindo o metodo


// ACESSANDO DIRETAMENTE O ATRIBUTO
console.log(usuario['nome']) // Out: Fernanda

// REATRIBUINDO
usuario['nome'] = 'Crixus'
console.log(usuario['nome']) // Out: Crixus