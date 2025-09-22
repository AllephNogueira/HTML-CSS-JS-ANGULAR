const pokeApi = {} // NOSSO OBJETO


objetoApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` // URL de onde vamos puxar.
    return fetch(url)
        .then((response) => response.json()) // Pegamos o response e estamos retornando em formato JSON
        .then((jsonBody) => jsonBody.results) // Results é onde fica nossa lista de pokemons
        .catch((erro) => console.log(erro)) // Se tiver um erro no codigo vai aparecer no console.
}

