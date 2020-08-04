const pokedex = document.getElementById('pokedex');
const cardback = document.getElementById('cardback');

//define a function to get 150 pokemon
const fetchPokemon = () => {
    
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    
    
    Promise.all(promises).then((results) => {
        console.log(results);
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            imageback: result.sprites['back_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            species: result.species.name
        }));

        displayPokemon(pokemon);
        console.log(pokemon)
    });
};


const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        
            <div class="card-container">
                <div class="card">
                    <figure class="front">
                        <img card="card-image" src="${pokeman.image}"/>
                        <h2 class="card-title">${pokeman.name}</h2>
                    </figure>
                    <figure class="back">
                        <h2 class="card-title">${pokeman.id}</h2>
                        <img card="card-image" src="${pokeman.imageback}"/>
                        <p class="card-subtitle">Type: ${pokeman.type}</p>
                        <p class="card-subtitle">Species: ${pokeman.species}</p>
                    </figure>
                </div>
            </div> 
       `
        )
        .join('');
        
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

{/* <div class="card">
  <div class="content">
    <div class="front">
      Front
    </div>
    <div class="back">
      Back!
    </div>
  </div>
</div> */}

