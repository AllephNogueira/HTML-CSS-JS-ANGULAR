function adicionandoUmZeroAEsquerda(numero){
    /** Explicando o codigo
     * Se o numero for maior ou igual a 10
     * Retornamos o proprio numero
     * Se for menor retornamos uma string 0 e o numero
     * Imagina o numero 7
     * Retornaria assim 07
     */
    return numero >= 10 ? numero : `0${numero}`;
}

// Vamos criar uma funçao que formata as datas.
function formatarDatas(data){
    /** Aqui na funçao estamos fazendo individual com cada numero
     * Imagina dia chega 6
     * Passamos ele na funçao e verificamos e retornamos o 06
     * Ai fazemos a mesma coisa com mes, ano e os demais.
     */
    const dia = adicionandoUmZeroAEsquerda(data.getDate());
    const mes = adicionandoUmZeroAEsquerda(data.getMonth() + 1);
    const ano = adicionandoUmZeroAEsquerda(data.getFullYear());
    const hora = adicionandoUmZeroAEsquerda(data.getHours());
    const min = adicionandoUmZeroAEsquerda(data.getMinutes());
    const segundos = adicionandoUmZeroAEsquerda(data.getSeconds());

    return `${dia} / ${mes} / ${ano} - ${hora} : ${min} : ${segundos}`
}

const data = new Date(); // Objeto criado
const dataBrasil = formatarDatas(data) // Objeto passado para funçao e recebendo retorno
console.log(dataBrasil) // Imprimindo objeto.