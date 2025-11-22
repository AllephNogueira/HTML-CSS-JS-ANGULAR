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


pokeApi.getPokemons().then((listaPokemons) => {
    const listItems = []; // Lista vazia onde vamos adicionar todos os documentos HTML

    for (let index = 0; index < listaPokemons.length; index++) {
        const pokemon = listaPokemons[index];
        listItems.push(converterPokemonParaHTML(pokemon))

        

    }
    console.log(listItems)
    pokemonList[0].innerHTML += listItems // Jogando toda a lista para dentro do HTML
})

console.log('Sucesso')

