const pokemonList = document.getElementsByClassName('pokemons')
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 5;
let offset = 0;

function converterPokemonParaHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                         alt="${pokemon.name}">
                </div>


        </li>
    `
}

function loadPokemonItens(offset, limit) {
    /** Vamos garantir que se a API não retonar nenhum pokemom, ela vai ser uma lista vazia por padrao. */
    pokeApi.getPokemons(offset, limit).then((listaPokemons = []) => {


        /** Atenção
         * Lembrar que se na arrow function tiver apenas um retorno e uma unica linha, podemos remover ele e nao precisamos das {}
         */
        const novaListaDePokemons = listaPokemons.map((pokemon) => converterPokemonParaHTML(pokemon)) // Aqui estamos retornando o HTML


        const newHTML = novaListaDePokemons.join('') // Estamos juntando os dados

        pokemonList[0].innerHTML += newHTML // Juntando tudo no meu HTML

    })
}



loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    const maxRecords = 11 // Maximo de pokemons que deve carregar.
    const nextOffset = offset + limit // Proximos pokemons no caso 5 de 10 exemplo

    if (nextOffset >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton) // remove botão
    } else {
        loadPokemonItens(offset, limit)
    }

    offset += limit
})