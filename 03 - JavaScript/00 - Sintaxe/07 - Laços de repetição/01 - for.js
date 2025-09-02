const nome = 'Alleph Nogueira de Oliveira'

for (let index = 0; index < nome.length; index++) {
    let element = nome[index];
    console.log(element)
    
}


const usuarios = [];
usuarios.push('Alleph');
usuarios.push('Fernanda');
usuarios.push('Livia');
usuarios.push('Jane');
usuarios.push('Guilherme');

for (let index = 0; index < usuarios.length; index++) {
    let element = usuarios[index];
    console.log(`Usuarios cadastrados ${element}`)
    
}


const notas = []
notas.push(10)
notas.push(7)
notas.push(6)
notas.push(5.5)
let notaTotal = 0
for (let index = 0; index < notas.length; index++) {
    notaTotal += notas[index];
}
const media = notaTotal / notas.length
console.log(`Média total: ${media.toFixed(2)}`)
