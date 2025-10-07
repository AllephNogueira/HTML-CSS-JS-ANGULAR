// Maneira de criar um objeto date
const data = new Date();
// Agora aqui dentro de data, vai ter horas, minutos, segundos...

console.log(data.toString())

// Fazendo 3 horas
// 60 segundos
// * 3 horas * 1000 mile segundo.

const tresHoras = 60 * 60 * 3 * 1000


// Pegando uma data
// Ano, mes, dia, - horas, minutos, segundos, ml segundos.
// Lembrando que em JS o mes começa do 0 e vai ate o 11.
const novaData =  new Date(2019, 2, 22, 12,20,27,500);
console.log(novaData.toString())


// Outro formato com Strings
const novaData1 =  new Date('2019-04-20 20:20:59');
console.log(novaData1.toString())

    // Obtendo o numero do dia - mes e ano
    console.log('Dia', novaData1.getDate())
    console.log('Mes', novaData1.getMonth() + 1) // Mes começa com 0 e dessa forma estamos aumentando +1 para ajustar.
    console.log('Ano', novaData1.getFullYear())
    // Numero do dia da semana
    console.log('Dia da semana', novaData1.getDay())




// Obtendo agora sem precisar criar um objeto
console.log(Date.now())
// Exemplo retornou esses milles segundos desde o dia 0 ate agora 1759755520337
// Agora se a gente pega esse retorno e faz um objeto, vamos ter a data de hoje.
const diaDeHoje = new Date(1759755520337)
console.log(`Dia de hoje ${diaDeHoje}`)
