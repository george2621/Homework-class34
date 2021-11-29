'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network Error');
      }
    })
    .catch((error) => console.log(error));
}

async function fetchAndPopulatePokemons() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    const list = document.querySelector('select');
    const jsonResponse = await fetchData(url);
    const pokemonName = jsonResponse.results.map((item) => item.name);
    pokemonName.forEach((element) => {
      const option = document.createElement('option');
      option.textContent = element;
      option.value = element;
      list.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
}

async function fetchImage() {
  try {
    const pokemonImg = document.querySelector('img');
    const list = document.querySelector('select');
    const pokemonName = list.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const jsonResponse = await fetchData(url);
    pokemonImg.src = jsonResponse.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
}

function main() {
  const mainDiv = document.createElement('div');
  const getPokemonButton = document.createElement('button');
  getPokemonButton.textContent = 'Get Pokemon!';
  getPokemonButton.type = '';
  const selectedList = document.createElement('select');

  document.body.appendChild(mainDiv);
  mainDiv.appendChild(getPokemonButton);
  mainDiv.appendChild(selectedList);

  getPokemonButton.addEventListener('click', fetchAndPopulatePokemons);

  if (selectedList) {
    const pokemonImg = document.createElement('img');
    pokemonImg.src = ' ';
    pokemonImg.alt = 'Pokemon Image';
    document.body.appendChild(pokemonImg);
    selectedList.addEventListener('change', fetchImage);
  }
}

window.addEventListener('load', main);
