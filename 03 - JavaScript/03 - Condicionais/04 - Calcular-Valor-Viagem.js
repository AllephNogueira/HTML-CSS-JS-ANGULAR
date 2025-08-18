const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tipoDeCombustivel = 0
let quantidadeDeKmRodado = 0
let valorTotalDosPedagios = 0
let quantidadeDePedagios = 0
let consumoPorLitro = 0
let valorLitroCombustivel = 0

rl.question('Qual combustivel você vai usar?', (combustivel) => {
    tipoDeCombustivel = combustivel;
    rl.question('Quantos kms você vai rodar?', (km) => {
        quantidadeDeKmRodado = Number(km)
        rl.question('Valor totais dos pedagios', (valorPedagios) => {
            valorTotalDosPedagios = Number(valorPedagios)
            rl.question('Por quantos pedagios você vai passar?', (quantidadePedagios) => {
                quantidadeDePedagios = Number(quantidadePedagios)
                rl.question('Quanto seu carro faz com um litro de combustivel?', (gastoPorLitro) => {
                    consumoPorLitro = Number(gastoPorLitro)
                    rl.question('Quanto você pagou por litro de combustivel? ', (valorLitro) => {
                        valorLitroCombustivel = Number(valorLitro)

                        // Gasto por viagem
                        const calculoGastoCombustivel = (quantidadeDeKmRodado / consumoPorLitro) * valorLitroCombustivel
                        const calculoTotal = calculoGastoCombustivel + valorTotalDosPedagios

                        console.log(`COMBUSTIVEL USADO: ${tipoDeCombustivel}`);
                        console.log(`QUANIDADE DE KM RODADO: ${quantidadeDeKmRodado}`);
                        console.log(`QUANTIDADE DE PEDAGIOS: ${quantidadeDePedagios}`);
                        console.log(`VALOR GASTO NO PEDAGIO: ${valorTotalDosPedagios}`);
                        console.log(`CONSUMO DO CARRO: ${consumoPorLitro}`);
                        console.log(`GASTO COMBUSTIVEL: ${calculoGastoCombustivel}`);
                        console.log(`GASTO TOTAIS: ${calculoTotal}`);

                        rl.close()
                    })                    
                })
            })
        })
    })
})