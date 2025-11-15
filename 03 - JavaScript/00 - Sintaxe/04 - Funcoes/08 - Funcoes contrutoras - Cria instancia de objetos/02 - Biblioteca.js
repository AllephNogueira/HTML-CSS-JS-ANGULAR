function Biblioteca(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;

    this.apresentar = function(){
        return `Livro: ${this.titulo} - foi inscrito por: ${this.autor} - ${this.ano}`;
    }

    this.resumo = function(){
        return `${this.titulo} ${this.autor} ${this.ano}`
    }
}

const livro = new Biblioteca('O senhor dos aneis', 'R.R.R Tolkien', 1980)
console.log(livro.titulo)
console.log(livro.apresentar())
console.log(livro.resumo())