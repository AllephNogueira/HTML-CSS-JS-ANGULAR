const pokeApi = {} // NOSSO OBJETO


function converterParaClasseDePokemon(pokemonDetail) {
    const pokemon = new Pokemon() 
    pokemon.number = pokemonDetail.order
    pokemon.name = pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1); // Retornando o nome já com a primeira letra em maisuculo.
    pokemon.types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    pokemon.type = pokemon.types[0] /** Aqui vamos pegar o primeiro item da lista de types... */
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default
    return pokemon
}
 

pokeApi.getPokemonsDetalhes = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(converterParaClasseDePokemon)
}


pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` // URL de onde vamos puxar.

    return fetch(url)
        .then((response) => response.json()) // Pegamos o response e estamos retornando em formato JSON
        .then((jsonBody) => jsonBody.results) // JsonBody é o body completo e results é onde esta nossa lista de pokemons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetalhes))
        .then((detalhesPokemon) => Promise.all(detalhesPokemon))
        .catch((erro) => console.log(erro)) // Se tiver um erro no codigo vai aparecer no console.
}

