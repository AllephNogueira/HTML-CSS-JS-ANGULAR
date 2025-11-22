const valorProduto = 200
const formaDePagamento = 'Credito'
const quantidadeDeParcelas = 3

const descontoDinheiro = 0.1
const descontoDebito = 0.05
const acressimoCredito = 0.1




let valorFinalProduto = 0

function informacaoFinalDoProduto(valorProduto) {

    if (quantidadeDeParcelas <= 2) {
        console.log(`Forma de pagamento ${formaDePagamento}`)
        console.log(`Desconto oferecido ${descontoDinheiro * 100}%`)
        console.log(`Valor final: ${valorProduto}`)
    } else {
        console.log('Parcelamento com juros.')
        console.log(`Forma de pagamento ${formaDePagamento}`)
        console.log(`Acressimo: ${acressimoCredito * 100}%`)
        console.log(`Valor final: ${valorProduto}`)
    }
}

if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
    valorFinalProduto = valorProduto - (valorProduto * descontoDinheiro)
    informacaoFinalDoProduto(valorFinalProduto)
} else if (formaDePagamento === 'Debito') {
    valorFinalProduto = valorProduto - (valorProduto * descontoDebito)
    informacaoFinalDoProduto(valorFinalProduto)
} else if (formaDePagamento === 'Credito' && quantidadeDeParcelas <= 2) {
    console.log('Parcelamento sem juros.')
    valorFinalProduto = valorProduto
    informacaoFinalDoProduto(valorFinalProduto)
} else if (formaDePagamento === 'Credito' && quantidadeDeParcelas > 2) {
    valorFinalProduto = valorProduto + (valorProduto * acressimoCredito)
    informacaoFinalDoProduto(valorFinalProduto)
}
