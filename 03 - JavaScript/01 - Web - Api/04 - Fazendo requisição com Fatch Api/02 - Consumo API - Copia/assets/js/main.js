

const offset = 0 // Qual pagina vamos carregar, no caso a pagina 0
const limit = 10 // Limite de 10 itens nessa pagina
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` // URL de onde vamos puxar.


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

fetch(url)
    .then((response) => response.json()) // Pegamos o response e estamos retornando em formato JSON
    .then((jsonBody) => jsonBody.results) // Results é onde fica nossa lista de pokemons
    .then((listaPokemons) => {
        console.log(listaPokemons) // Lista com nossos pokemons

        for (let index = 0; index < listaPokemons.length; index++) {
            const pokemon = listaPokemons[index];
            console.log(converterPokemonParaHTML(pokemon))
            document.getElementsByClassName('pokemons')[0].innerHTML += converterPokemonParaHTML(pokemon);
           
        }
    })
    .catch((erro) => console.log(erro))
    .finally((final) => console.log('Codigo finalizado' + final))

console.log('Sucesso')

