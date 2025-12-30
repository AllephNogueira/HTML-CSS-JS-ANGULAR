const array1 = [1,2,3,4,5]
const array2 = [45,45,546,456]
// pega array1, junta com array2 e manda tudo para novo array
// Podemos mandar mais informacao no final tambem
// Dessa forma estamos pegando array pronto, novo array de numeros e de nome
const novoArray = [...array1, ...array2, 'Alleph','Fernanda','Crixus','Amora', 10,20,30,40,50]
//const novoArray = array1.concat(array2, [4,7,8,1], 'Alleph', 'Fernanda', 'Crixus') 

console.log(novoArray)