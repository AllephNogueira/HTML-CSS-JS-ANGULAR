// O finally sempre vai ser executado, independente do que acontecer.
function retornarHora(data) {
    // Aqui estamos verifcando uma instance
    // Só vai ser instancia do date, quando criamos um objeto de data.
    if(!(data instanceof Date)) {
        throw new TypeError ('Não é uma hora valida')
    }
}



// Agora tratando tudo
try {   
    //const data = retornarHora(new Date())
    const data = retornarHora('13/10/2025')
    console.log(data)
}catch(e){
    console.log('Error: ' + e)
}finally {
    console.log('Encerramento do programa')
}