pokemonData('charmander')
pokemonData('meowth')
pokemonData('growlithe')
pokemonData('ditto')
pokemonData('pikachu')
pokemonData('charizard')
async function pokemonData(name){
    url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const pokeName = data.name
    const pokeAbilities = data.abilities.map(ability => `<li class="list-group-item">${ability.ability.name}</li>`).join("")
    const pokeImage = data.sprites.front_default
    const pokemonCard = document.createElement("div")
    pokemonCard.className = "card"
    pokemonCard.style = "width: 18rem;"
    pokemonCard.innerHTML = `
        <img class="card-img-top" src="${pokeImage}" alt="pokemon sprite">
        <div class="card-body ">
            <h5 class="card-title">${pokeName}</h5>
            <ul class="list-group list-group-flush">Abilities: ${pokeAbilities}</ul>
            <a href="#" class="btn btn-primary d-flex justify-content-center">Catch!</a>
        </div>
    `
    document.body.appendChild(pokemonCard)
}

