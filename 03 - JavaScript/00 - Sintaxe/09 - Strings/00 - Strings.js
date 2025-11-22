let minhaString = 'Teste 123'

/** 
 * Dessa maneira usando o \ você pode usar o aspas simples mais de uma vez dentro de uma string
 * Lembrar que sempre vem a barra invertida primeiro, depois a aspas.
 */

let minhaString2 = 'Teste \'teste\''; 
console.log(minhaString2)


/**
 * Agora sabemos também que uma String é uma lista(array) de caracteres
 * Então podemos pegar uma parte desse texto por exemplo
 */

let nome = 'Alleph Nogueira'
console.log(nome[0]) // A
console.log(nome[15]) // undefined = Estamos pegando um elemento que não existe, sendo assim ele esta indefinido.
console.log(nome[-5]) // undefined = Estamos pegando um elemento que não existe, sendo assim ele esta indefinido.
console.log(nome.charAt(7)) // vamos pegar o elemento da posição 7 = N


/** 
 * Concatenado valores na string também
 */

let texto = 'Alleph'
console.log(texto.concat(' é muito bonito.')) // Alleph é muito bonito.
console.log(`${texto} é muito bonito.`) // Outra maneira de fazer mais facil.

/**
 * Pesquisando um indice de uma palavra
 */

let texto2 = 'Estou estudando JavaScript'
console.log(texto2.indexOf('JavaScript')) // Começamos no indice 16
console.log(texto2.indexOf('Alleph')) // Caso não seja encontrado ele retorna -1 
console.log(texto2.indexOf('JavaScript', 3)) // Aqui estamos mandando ele procurar essa palavra comçando do indice 3, ele vai ignorar os indices antes do 3


/**
 * Essa maneira ele vai começar a procurar de tras para frente
 * Índices:   012345678901234567890123456
   Texto:    'Estou estudando JavaScript'
                        ↑
                'estudando' começa no índice 6
 */
let texto3 = 'Estou estudando JavaScript'
console.log(texto3.lastIndexOf('estudando', 10)) // Aqui vamos procurar de tras para frente procurando ate o indice 10


texto1.indexOf('mundo')        // Retorna o índice da primeira ocorrência
texto1.lastIndexOf('o')        // Retorna o índice da última ocorrência
texto1.includes('Olá')         // Retorna true se contém o texto
texto1.startsWith('Olá')       // Verifica se começa com o texto
texto1.endsWith('mundo')       // Verifica se termina com o texto


texto1.slice(0, 3)             // Extrai parte da string (do índice 0 ao 2)
texto1.substring(0, 3)         // Similar ao slice, mas não aceita negativos
texto1.substr(0, 3)            // (Obsoleto) Extrai a partir do índice com comprimento

texto2.replace('incrível', 'poderoso') // Substitui parte da string
texto2.replaceAll('a', '@')            // Substitui todas as ocorrências
texto1.repeat(3)                       // Repete a string 3 vezes

texto2.toUpperCase()          // Converte para maiúsculas
texto2.toLowerCase()          // Converte para minúsculas
texto2.trim()                 // Remove espaços no início e fim
texto2.trimStart()            // Remove espaços do início
texto2.trimEnd()              // Remove espaços do fim

texto2.split(' ')             // Divide em array pelas palavras
['JS', 'é', 'top'].join(' ')  // Junta array em string com separador

String(123)                   // Converte número para string
(123).toString()              // Também converte número para string

texto1.localeCompare('Olá mundo') // Compara strings (retorna -1, 0 ou 1)

texto1[0]                     // Retorna o primeiro caractere
texto1.charAt(0)              // Também retorna o caractere no índice
texto1.charCodeAt(0)          // Retorna o código Unicode do caractere

let nome1 = 'Alleph';
let saudacao = `Olá, ${nome1}! Seja bem-vindo.`; // Usa crase para interpolar

texto2.match(/Java/g)         // Retorna todas as ocorrências
texto2.search(/Script/)       // Retorna o índice da primeira ocorrência
texto2.replace(/a/g, '@')     // Substitui todas as letras 'a' por '@'