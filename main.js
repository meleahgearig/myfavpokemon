// Define Pokedex variable
const pokedex = document.getElementById('pokedex');

//Define allPokemon variable
let allPokemon; 

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

        allPokemon = pokemon;

        console.log(pokemon)
    });
};
//End Fetch Pokemon

//Begin Display Pokemon
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
//End Display Pokemon

//run Fetch Pokemon after Display
fetchPokemon();

//Begin Add Pokemon 
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
//End Add Pokemon

// Begin filter functions
//All Pokemon
const filterAll = document.getElementById('filterAll'); 
let isAll = true;

filterAll.addEventListener('click', () => {
    displayPokemon(allPokemon);
})

//Grass Pokemon
const filterGrass = document.getElementById('filterGrass');
let isGrass = true;

filterGrass.addEventListener('click', () => {
    isGrass = !isGrass;
    const grassPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('grass');
    })
    displayPokemon(grassPokemon);
})

//Fire Pokemon
const filterFire = document.getElementById('filterFire');
let isFire = true;

filterFire.addEventListener('click', () => {
    isFire = !isFire;
    const firePokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('fire');
    })
    displayPokemon(firePokemon);
})

//Water Pokemon
const filterWater = document.getElementById('filterWater'); 
let isWater = true;

filterWater.addEventListener('click', () => {
    isWater = !isWater;
    const waterPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('water');
    })
    displayPokemon(waterPokemon);
})

//Bug Pokemon
const filterBug = document.getElementById('filterBug'); 
let isBug = true;

filterBug.addEventListener('click', () => {
    isBug = !isBug;
    const bugPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('bug');
    })
    displayPokemon(bugPokemon);
})

//Dragon Pokemon
const filterDragon = document.getElementById('filterDragon'); 
let isDragon = true;

filterDragon.addEventListener('click', () => {
    isDragon = !isDragon;
    const dragonPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('dragon');
    })
    displayPokemon(dragonPokemon);
})

//Ice Pokemon
const filterIce = document.getElementById('filterIce'); 
let isIce = true;

filterIce.addEventListener('click', () => {
    isIce = !isIce;
    const icePokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('ice');
    })
    displayPokemon(icePokemon);
})

//Fighting Pokemon
const filterFighting = document.getElementById('filterFighting'); 
let isFighting = true;

filterFighting.addEventListener('click', () => {
    isFighting = !isFighting;
    const fightingPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('fighting');
    })
    displayPokemon(fightingPokemon);
})

//Flying Pokemon
const filterFlying = document.getElementById('filterFlying'); 
let isFlying = true;

filterFlying.addEventListener('click', () => {
    isFlying = !isFlying;
    const flyingPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('flying');
    })
    displayPokemon(flyingPokemon);
})

//Ghost Pokemon
const filterGhost = document.getElementById('filterGhost'); 
let isGhost = true;

filterGhost.addEventListener('click', () => {
    isGhost = !isGhost;
    const ghostPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('ghost');
    })
    displayPokemon(ghostPokemon);
})

//Ground Pokemon
const filterGround = document.getElementById('filterGround'); 
let isGround = true;

filterGround.addEventListener('click', () => {
    isGround = !isGround;
    const groundPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('ground');
    })
    displayPokemon(groundPokemon);
})

//Electric Pokemon
const filterElectric = document.getElementById('filterElectric'); 
let isElectric = true;

filterElectric.addEventListener('click', () => {
    isElectric = !isElectric;
    const electricPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('electric');
    })
    displayPokemon(electricPokemon);
})

//Normal Pokemon
const filterNormal = document.getElementById('filterNormal'); 
let isNormal = true;

filterNormal.addEventListener('click', () => {
    isNormal = !isNormal;
    const normalPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('normal');
    })
    displayPokemon(normalPokemon);
})

//Poison Pokemon
const filterPoison = document.getElementById('filterPoison'); 
let isPoison = true;

filterPoison.addEventListener('click', () => {
    isPoison = !isPoison;
    const poisonPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('poison');
    })
    displayPokemon(poisonPokemon);
})

//Psychic Pokemon
const filterPsychic = document.getElementById('filterPsychic'); 
let isPsychic = true;

filterPsychic.addEventListener('click', () => {
    isPsychic = !isPsychic;
    const psychicPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('psychic');
    })
    displayPokemon(psychicPokemon);
})

//Rock Pokemon
const filterRock = document.getElementById('filterRock'); 
let isRock = true;

filterRock.addEventListener('click', () => {
    isRock = !isRock;
    const rockPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('rock');
    })
    displayPokemon(rockPokemon);
})

//Fairy Pokemon
const filterFairy = document.getElementById('filterFairy'); 
let isFairy = true;

filterFairy.addEventListener('click', () => {
    isFairy = !isFairy;
    const fairyPokemon = allPokemon.filter(pokedex => {
            return pokedex.type.includes('fairy');
    })
    displayPokemon(fairyPokemon);
})

//End Filter Functions



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

