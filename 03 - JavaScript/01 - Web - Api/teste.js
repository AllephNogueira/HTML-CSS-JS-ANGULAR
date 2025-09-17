/**
 * Implementar a função abaixo.
 * Regras:
 *  - Considere ADULTO quem tem idade >= 18
 *  - Ignore entradas inválidas (sem idade numérica)
 *  - NÃO conte duplicados com o MESMO nome E MESMA idade
 *  - Retorne apenas a QUANTIDADE de adultos (número)
 */
function contarAdultos(pacientes) {
    let quantidadeDeAdultos = 0;
    const vistos = new Set();

    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];

        // Verifica se idade é válida
        if (typeof paciente.idade !== 'number') continue;

        // Cria chave única com nome e idade
        const chave = `${paciente.nome}-${paciente.idade}`;

        // Verifica se já foi contado
        if (!vistos.has(chave)) {
        vistos.add(chave);

        // Verifica se é adulto
        if (paciente.idade >= 18) {
            quantidadeDeAdultos++;
        }
        }
    }

    console.log(quantidadeDeAdultos)


}


try { module.exports = contarAdultos; } catch (_) { }

// Para executar o codigo (console) é necessario uma chamada para a função
contarAdultos([
    { nome: "Ana", idade: 20 },
    { nome: "João", idade: 16 },
    { nome: "Lia", idade: 18 },
    { nome: "Ana", idade: 20 },
    { nome: "Ana" }
])
