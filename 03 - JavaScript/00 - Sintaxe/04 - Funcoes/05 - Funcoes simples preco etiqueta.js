// Se for debito pix ou dinheiro 10% de desconto
// Cartao de credito ate 2* nao tem juros
// Acima de 2* 10% de juros

function usuarioConectado(usuario) {
    console.log(`Seja bem vindo: ${usuario}`)
}

function valorDoProduto(valorDoProduto) {
    return valorDoProduto;
}

function formaDePagamento(opcaoDePagamento, quantidadeDeParcelas = 0) {
    return {
        opcaoDePagamento: opcaoDePagamento,
        quantidadeDeParcelas: quantidadeDeParcelas
    }
}

function calculoDeJurosOuDesconto(valorProduto, opcaoDePagamento, quantidadeDeParcelas = 0){
    if(opcaoDePagamento === "Dinheiro" || opcaoDePagamento === "Pix" || opcaoDePagamento === "Debito"){
        console.log('10% de desconto valor total: ' + (valorProduto - (valorProduto / 100) * 10 ))
    }else if(opcaoDePagamento === "Credito" && quantidadeDeParcelas <= 2 ){
        console.log('Parcelamento sem Juros\nValor total: ' + valorProduto)
    }else if(opcaoDePagamento === "Credito" && quantidadeDeParcelas > 2){
        console.log('10% de juros valor total: ' + ((valorProduto / 100) * 10 + valorProduto ))
    }else {
        console.log('Opcão de pagamento não encontrado.')
    }
}




function main(){
    usuarioConectado('Alleph')
    const valorProduto = valorDoProduto(200)
    const formaDePagamentoObj = formaDePagamento('Debito', 2) // FORMA DE PAGAMENTO e PARCELAMENTO
    calculoDeJurosOuDesconto(
        valorProduto, 
        formaDePagamentoObj.opcaoDePagamento,
        formaDePagamentoObj.quantidadeDeParcelas
    )

    
    
    

}


main();