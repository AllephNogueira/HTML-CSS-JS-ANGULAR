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



pokeApi.getPokemons.then((listaPokemons) => {
    console.log(listaPokemons) // Lista com nossos pokemons

    for (let index = 0; index < listaPokemons.length; index++) {
        const pokemon = listaPokemons[index];
        console.log(converterPokemonParaHTML(pokemon))
        document.getElementsByClassName('pokemons')[0].innerHTML += converterPokemonParaHTML(pokemon);

    }
})

console.log('Sucesso')

