// 📌 Exibindo strings com diferentes tipos de aspas
console.log('Alleph Nogueira');   // aspas simples
console.log("Alleph Nogueira");   // aspas duplas
console.log(`Alleph Nogueira`);   // template literal (crase)

// 📌 Strings com aspas internas
console.log("Alleph 'Nogueira' "); // aspas simples dentro de aspas duplas
console.log('Alleph "Nogueira" '); // aspas duplas dentro de aspas simples
console.log(`Alleph 'Nogueira' `); // aspas simples dentro de template literal
console.log(`Alleph "Nogueira" `); // aspas duplas dentro de template literal

// ✅ Tudo que estiver entre aspas simples, duplas ou crase é considerado STRING em JavaScript

// 📌 Exibindo números
console.log(31); // número inteiro
console.log(82.700); // número decimal

// 📌 Exibindo múltiplos valores juntos
console.log('Alleph', 31, 82.700); // nome, idade, peso

// 📌 Usando template literals para interpolar variáveis
let nome = 'Alleph';
let idade = 31;
let peso = 82.7;

console.log(`Meu nome é ${nome}, tenho ${idade} anos e peso ${peso}kg.`);

// 📌 Comentários explicativos
/*
    - Use aspas simples, duplas ou crase para criar strings.
    - Template literals (crase) permitem interpolar variáveis com ${...}.
    - console.log pode exibir múltiplos valores separados por vírgula.
    - Números não precisam de aspas.
    - Comentários como este ajudam a documentar seu código.
*/

// Fim do exemplo


console.log('Meu nome é "Alleph". Estou aprendendo JavaScript às', 18, 'da noite!')