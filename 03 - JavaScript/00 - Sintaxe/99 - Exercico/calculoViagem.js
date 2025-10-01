
// Valor do combustivel 
const precoCombustivel = 5.99;

// Quanto meu carro faz com 1 litro de combustivel
const quantosKmOCarroFazCom1Litro = 16;

// Quantos KM eu rodei.
const quantidadeDeKmRodados = 500;


// Quantidade de KM rodados divido pelo meu gasto medio * o preco do combustivel
const quantidadeGasta = ( quantidadeDeKmRodados / quantosKmOCarroFazCom1Litro ) * precoCombustivel;

console.log(`Você gastou o total de R$ ${quantidadeGasta.toFixed(2)}`);