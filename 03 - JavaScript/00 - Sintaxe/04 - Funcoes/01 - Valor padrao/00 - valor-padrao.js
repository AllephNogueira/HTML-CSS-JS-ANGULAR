// Imagina uma funçao que nao tem o valor padrao,
// Nesse exemplo estamos passando apenas o numero 2 == a
// Estamos esquecendo do valor de B
// Isso vai fazer retornar um NaN não e numero valido
function soma(a,b) {
    console.log(a+b)
}
soma(2)


// Mas podemos também criar uma funçao com numero padrao para esses casos
// Nesse exemplo estamos fazendo o seguinte se B tiver algo ele recebe B se nao ele coloca o padrao para 0
function soma2(a,b) {
    b = b || 0;
    console.log(a+b)
}
soma2(2)

// Outra novidade é assim
// Se a gente nao envia um valor padrao ela autoamticamente vira 0
function soma3(a = 0,b = 0) {
    console.log(a+b)
}
soma3(2)



// Agora imagina que queira usar um valor que já esta como padrao
// Nesse exemplo estamos dizendo que queremos usar o valor de B como padrao.
function soma3(a = 0,b = 10, c = 20) {
    console.log(a+b)
}
soma3(10, undefined, 10)