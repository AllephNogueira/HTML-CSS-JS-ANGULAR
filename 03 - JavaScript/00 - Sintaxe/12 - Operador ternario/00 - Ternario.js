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

// Agora fazendo um valor padrao
// Repara que estamos usando um valor padrao 
// Que no caso é "ficar em casa"
// Vamos deixar sempre isso como se fosse uma segunda opcao se der errado o primeiro teste.

// Agora vamos imaginar um caso real, o usuario não selecionou a temperatura la no site, então voltou um null
// Com isso vamos deixar o ficar em casa como um padrao se nao deu certo o que ele selecinou.

const temperatura2 = null
const opcao2 = temperatura2 || 'Ficar em casa';
console.log(opcao2)