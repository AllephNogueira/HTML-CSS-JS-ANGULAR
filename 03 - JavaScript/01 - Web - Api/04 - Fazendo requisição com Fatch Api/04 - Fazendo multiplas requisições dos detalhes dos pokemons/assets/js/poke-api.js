const pokeApi = {} // NOSSO OBJETO


pokeApi.getPokemonsDetalhes = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
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

