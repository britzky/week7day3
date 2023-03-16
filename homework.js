pokemonData('charmander')
pokemonData('meowth')
pokemonData('growlithe')
pokemonData('ditto')
pokemonData('pikachu')
pokemonData('charizard')
async function pokemonData(name){
    //url to get pokemon data based on the pokemons name
    url = `https://pokeapi.co/api/v2/pokemon/${name}`
    // variable for the get request. wait for the response to come back before continuing 
    const response = await fetch(url)
    // variable for the response in json. wait for the data to be parsed before continuing
    const data = await response.json()
    // variable for the pokemon name retrieved
    const pokeName = data.name
    // variable that uses map to iterate through the abilities the pokemon has and place them in an unordered list 
    const pokeAbilities = data.abilities.map(ability => `<li class="list-group-item">${ability.ability.name}</li>`).join("")
    // variable to get the pokemons default sprite image
    const pokeImage = data.sprites.front_default
    // variable for a div
    const pokemonCard = document.createElement("div")
    // Add class name
    pokemonCard.className = "card"
    // add width
    pokemonCard.style = "width: 18rem;"
    // add the contents of the card using the variables above
    pokemonCard.innerHTML = `
        <img class="card-img-top" src="${pokeImage}" alt="pokemon sprite">
        <div class="card-body ">
            <h5 class="card-title">${pokeName}</h5>
            <ul class="list-group list-group-flush">Abilities: ${pokeAbilities}</ul>
            <a href="#" class="btn btn-primary d-flex justify-content-center">Catch!</a>
        </div>
    `
    //append the card to the body
    document.body.appendChild(pokemonCard)
}

