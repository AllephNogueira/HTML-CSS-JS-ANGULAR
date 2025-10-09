function converterDiaDaSemana(data) {
    let diaSemana;
    switch (data) {
        case 0:
            diaSemana = 'Domingo'
            break;
        case 1:
            diaSemana = 'Segunda-feira'
            break;
        case 2:
            diaSemana = 'Terça-feira'
            break;
        case 3:
            diaSemana = 'Quarta-feira'
            break;
        case 4:
            diaSemana = 'Quinta-feira'
            break;
        case 5:
            diaSemana = 'Sexta-feira'
            break;
        case 6:
            diaSemana = 'Sabado-feira'
            break;
        default:
            diaSemana = 'Dia não encontrado.'
    }

    return diaSemana
}

function converterMesDoAno(data) {
    let mesAno;
    switch (data) {
        case 0:
            mesAno = 'Janeiro'
            break;
        case 1:
            mesAno = 'Fevereiro'
            break;
        case 2:
            mesAno = 'Março'
            break;
        case 3:
            mesAno = 'Abril'
            break;
        case 4:
            mesAno = 'Maio'
            break;
        case 5:
            mesAno = 'Junho'
            break;
        case 6:
            mesAno = 'Julho'
            break;
        case 7:
            mesAno = 'Agosto'
            break;
        case 8:
            mesAno = 'Setembro'
            break;
        case 9:
            mesAno = 'Outubro'
            break;
        case 10:
            mesAno = 'Novembro'
            break;
        case 11:
            mesAno = 'Dezembro'
            break;
        default:
            mesAno = 'Dia não encontrado.'
    }

    return mesAno
}

const data = new Date();
console.log(data)
const diaSemana = converterDiaDaSemana(data.getDay())
const mes = converterMesDoAno(data.getMonth())
const diaDoMes = data.getDay() == 1? '1°' : data.getDay();
const ano = data.getFullYear();
const hora = {
    hora : data.getHours(),
    minutos : data.getMinutes()
}

document.querySelector('h1').innerHTML = `${diaSemana}, ${diaDoMes} de ${mes} de ${ano} ${hora.hora}:${hora.minutos}`

