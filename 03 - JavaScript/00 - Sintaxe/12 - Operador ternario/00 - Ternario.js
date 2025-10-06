// Vamos olhar as duas situações IF e ternario

const temperatura = 40
if(temperatura > 30) {
    console.log('Ir a praia.')
}

// Agora com operador ternário:
// Temos uma condicao que verifica se a temperatura é maior ou igual a 30.
// Se for verdadeiro, a opção será "Ir à praia".
// Se for falso, a opção será "Ficar em casa".

const opcao = temperatura >= 30 ? 'Ir à praia' : 'Ficar em casa';
console.log(opcao);