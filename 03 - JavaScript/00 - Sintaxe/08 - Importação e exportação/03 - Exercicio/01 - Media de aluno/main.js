const { gets, calcularMedia, print } = require('./funcoes-auxiliares')

function main() {
    const media = gets([10, 8, 7, 3]);
    const resultado = calcularMedia(media);
    print(resultado)
}

main();