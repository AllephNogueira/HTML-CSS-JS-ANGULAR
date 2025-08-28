const numeros = [];
numeros.push(10);
numeros.push(8);
numeros.push(7);
numeros.push(2024);
numeros.push(54546);
numeros.push(0);
numeros.push(45544);
numeros.push(1221321);
numeros.push(122121);
numeros.push(545454);

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if(element % 2 === 0){
        console.log(`Numero par: ${element}`)
    }else {
        console.log(`Numeros impar: ${element}`)
    }
        
    
}
