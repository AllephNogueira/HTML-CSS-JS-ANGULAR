// Uma funcao recursiva é uma funçao que ela mesmo se chama
// Lembra muito o for

// No navegador/node temos um limite de uso, então não podemos ficar chamando essa função direto
// Por esse motivo, vamos criar um valor maximo para ela

function recursiva(maximo){
    if(maximo >= 10) return; // Parar função

    maximo++ // Incrementando
    console.log(maximo) // Exibindo valor no console
    recursiva(maximo); // Chamando a funcao de volta

    // Resumindo a função vai ser chamada de volta enquanto ela for menor que 10
    // Quando ela atingir o valor 10, ela automaticamente vai sair, por causa do return
}

recursiva(1)