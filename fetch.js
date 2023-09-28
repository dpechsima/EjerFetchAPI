// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async


const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        updateCard(pokemon);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon);
    updateCard(pokemon);

})

// obtener el anterior
//
//
// obtener el siguiente

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        updateCard(pokemon);
    })

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        updateCard(pokemon);
    })



function updateCard (pokemon){
    document.getElementById('pokeName').textContent = 'Nombre: ' + pokemon.name;
    document.getElementById('pokeId').textContent = 'ID: ' + pokemon.id;
    document.getElementById('pokeWeight').textContent = 'Peso: ' + pokemon.weight;
    //document.getElementById('pokeIMG').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png';
    document.getElementById('pokeImg').src = pokemon.sprites.front_shiny;
    //console.log(pokemon.sprites.front_shiny);
}

/*


const wPokeIsIt = {
        name : pokemon.name,
        id : pokemon.id,
        weight : pokemon.weight,
        img : pokemon.sprites.front_shiny
    }

inStorage = localStorage.getItem('currentPokeId')
const pokemon = await fetchPokemon(newId)
fetch
const pokeMonster = { 

    id = 
}
*/
////////////////// POST
//
/*
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))
*/

/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch

/*

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}

const CARD_SECTION = document.getElementById('pokeCard');

const createDescription = () => {
    const userElements = {
        name: document.createElement('h3'),
        id: document.createElement('h3'),
        peso: document.createElement('h3'),
       // ,
    }
    imgsrc : pokemon.sprites.front_shiny
    return userElements;
}

const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;
    /*const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e;
        return pElement;
    })

    userElements.bands = bandList;*//*
    return userElements;
}
//console.log(user.fav_music.bands)

const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description);
    //console.log(card)
}
*/