function main(){
    const tarefas = [];

    tarefas.push(adicionarTarefa("Terminar o trabalho")); // PUSH ADICIONAR TAREFAS
    tarefas.push(adicionarTarefa("Adicionar uma funcao para remover"));
    tarefas.push(adicionarTarefa("Descobrir a tarefa e remover"));

    exibirTarefas(tarefas);

    const indiceQueVouRemover = removerUmaTarefa(tarefas, "Descobrir a tarefa e remover")


    tarefas.splice(indiceQueVouRemover, 1); // INDICE QUE VOU REMOVER E QUANTOS ITENS VOU REMOVER

    
    console.log("Nova lista de tarefas")
    exibirTarefas(tarefas);


};

function adicionarTarefa(tarefa){
    // Exemplo adicionando uma tarefa
    return tarefa;
}

function exibirTarefas(tarefas){
    if(tarefas != null) {
        for(let i = 0; i < tarefas.length ; i++){
            console.log(`${i} - ${tarefas[i]}`)
        }
   }
}

function removerUmaTarefa(tarefas, tarefaARemover){
    if(tarefas != null) {
        for (let index = 0; index < tarefas.length; index++) {
            const element = tarefas[index];
            if(element === tarefaARemover) {
                console.log(`Tarefa ${element} que vai ser removida foi encontrada, no indice ${index}`)
                return index
            }
            
        }
    }

}

main();