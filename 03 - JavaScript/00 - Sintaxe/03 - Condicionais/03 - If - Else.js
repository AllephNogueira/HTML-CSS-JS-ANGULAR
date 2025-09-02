    const numero = 2

    if (numero % 2 === 0) {
        console.log("Numero é par")
    }else {
        console.log("Numero impar")
    }


// NEGAÇÃO
    // Sempre vamos inverter a condição se for verdade vira falso
    // Se for falso vira verdade

    const numero1 = 2

    if (!(numero1 % 2 === 0)) {
        console.log("Numero é par")
    }else {
        console.log("Numero impar")
    }

// IF ELSE e ELSE IF ELSE

    const precoGasolina = 5.50
    if(precoGasolina < 6) {
        console.log("Calcule para saber se é mais vantajoso o etanol")
    }else if (precoGasolina < 5.50) {
        console.log("De preferencia a Gasolina")
    }else {
        console.log("Abasteça na gasolina.")
    }