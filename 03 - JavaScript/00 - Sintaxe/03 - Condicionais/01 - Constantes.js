
function verdadeiroOuFalso(opcao) {
    let homem = opcao
    if(homem) {
    console.log("Verdadeiro");
    }else {
    console.log("Falso");
    }
}


function outraManeiraDeFazer(){
    /* 10 é maior que 20? */ 
    console.log(10 > 20) 

}

// Duas maneiras de fazer para verificar se o numero é par ou impar

    function parOuImpar(numero){
        const numeroDigtado = numero
        if(numeroDigtado % 2 == 0) {
            return "Par"
        }else {
            return "Falso"
        }
    }

    const numero = 10
    const ePar = numero % 2; 


verdadeiroOuFalso(1)
outraManeiraDeFazer()
const valor = parOuImpar(8)
console.log(valor)
console.log(ePar)



