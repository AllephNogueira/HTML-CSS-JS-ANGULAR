function converterPokemonParaHTML(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                         alt="${pokemon.name}">
                </div>


        </li>
    `
}


const pokemonList = document.getElementsByClassName('pokemons')

/** Vamos garantir que se a API não retonar nenhum pokemom, ela vai ser uma lista vazia por padrao. */
pokeApi.getPokemons().then((listaPokemons = []) => {


    /** Atenção
     * Lembrar que se na arrow function tiver apenas um retorno e uma unica linha, podemos remover ele e nao precisamos das {}
     */
    const novaListaDePokemons = listaPokemons.map((pokemon) => converterPokemonParaHTML(pokemon)) // Aqui estamos retornando o HTML
    

    const newHTML = novaListaDePokemons.join('') // Estamos juntando os dados

    pokemonList[0].innerHTML += newHTML // Juntando tudo no meu HTML

})


