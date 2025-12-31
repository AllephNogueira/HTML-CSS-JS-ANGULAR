const pessoa2 = {
    nome: 'Alleph',
    idade: 31,
    estado: 'RJ',

    // Método para se apresentar
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro no ${this.estado}.`;
    },

    // Método para atualizar idade
    fazerAniversario() {
        this.idade++;
        return `Parabéns! Agora você tem ${this.idade} anos.`;
    },

    // Método para mudar de estado
    mudarEstado(novoEstado) {
        this.estado = novoEstado;
        return `Agora estou morando em ${this.estado}.`;
    }
};

// Exemplos de uso:
console.log(pessoa2.apresentar());       // "Olá, meu nome é Alleph, tenho 31 anos e moro no RJ."
console.log(pessoa2.fazerAniversario()); // "Parabéns! Agora você tem 32 anos."
console.log(pessoa2.mudarEstado('SP'));  // "Agora estou morando em SP."