const pokedex = document.getElementById('pokedex');

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

const pokeForm = document.querySelector('#pokeForm');

pokeForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const formData = new FormData(pokeForm);

    console.log(FormData);

    let pokeObj = new Object();

    for(let pair of formData.entries()) {
        pokeObj[pair[0]] = pair[1]
    }

    const cardContainer = createNode('div');
        cardContainer.className = "card-container";

    const card = createNode('div');
        card.className= "card";

    const front = createNode('figure');
        front.className="front";

    const cardTitleFront = createNode('h2');
        cardTitleFront.className = "card-title";
        cardTitleFront.innerHTML = pokeObj.name;

    const back = createNode('figure');
        back.className = "back";

    const cardTitleBack = createNode('h2');
        cardTitleBack.className = "card-title";
        cardTitleBack.innerHTML = pokeObj.species;

    append(cardContainer,card);
    append(front, cardTitleFront);
    append(card, front);
    append(card, back);
    append(back, cardTitleBack);

    append(pokedex, cardContainer);    

    console.log(cardContainer)
    
    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }
   
})

const typeToggleBtn = document.getElementById('toggleType');

typeToggleBtn.addEventListener('click', () => {
    console.log('Hey I have been clicked')
})








 // newPokeHTML = `
    // <div class="card-container">
    //     <div class="card">
    //         <figure class="front">
    //             <h2 class="card-title">${pokeObj.name}</h2>
    //         </figure>
    //         <figure class="back">
    //             <h2 class="card-title">${pokeObj.species}</h2>
    //         </figure>
    //     </div>
    // </div> 
    // `

/* <div class="card">
  <div class="content">
    <div class="front">
      Front
    </div>
    <div class="back">
      Back!
    </div>
  </div>
</div> */

