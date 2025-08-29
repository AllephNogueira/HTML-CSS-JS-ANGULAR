function gets(valorSalario) { 
    if(valorSalario < 1100.00) {
        return valorSalario * 0.05
    }else if(valorSalario <= 2500.00){
        return valorSalario * 0.10
    }else if(valorSalario > 2500.00 ) {
        return valorSalario * 0.15
    }else {
        return 'Preencha o valor corretamente.'
    }
}

function print(texto) { console.log(texto) }


module.exports = {gets, print}