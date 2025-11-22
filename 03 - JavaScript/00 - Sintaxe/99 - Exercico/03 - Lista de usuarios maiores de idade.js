/** Vou te passar uma lista com nome e idade
 * Voce deve retornar quantos sao maiores de idade
 * Nessa lista nao pode se repetir a mesma pessoa
 */

function usuarios(array) {
    let usuarioMaioresDeIdade = 0
    let listaDeUsuariosMaioresDeIdade = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        

        if(!listaDeUsuariosMaioresDeIdade.includes(element.nome)) {
            listaDeUsuariosMaioresDeIdade.push(element)
            console.log('Teste', listaDeUsuariosMaioresDeIdade)
        }
       
        /** 
         * 
         * if(element.idade >= 18) {
            usuarioMaioresDeIdade++
            //console.log('IF')

        } 
        */
        
    }

    //console.log('Usuarios maiores de idade: ', usuarioMaioresDeIdade)

}


usuarios([
    {nome: 'Alleph', idade: '31'}, 
    {nome: 'Fernanda', idade: '29'}, 
    {nome: 'Alleph', idade: '31'},
    {nome: 'Crixus', idade: '7'},
])

// Saida esperada: 2