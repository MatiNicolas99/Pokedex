let contenedor = document.querySelector('.contenedor');

/**
 * Consultar al API de pokeapi.co por el pokemon según ID
 * @param id Obtener hasta el ID del pokemon detallado
 * @returns Devuelve cada uno de los arreglos por ID del pokemon ingresado
 */

const fetchDatos = async (id) => {
    try {
        let fetch_datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        let data = await fetch_datos.json()
        creaPokemones(data);
        console.log(data)
    } catch (error) {
        console.log(error);
    }
};

/**
 * Muestra el Pokemon en una lista de elementos HTML
 * @param {*} pokemon Datos del pokemon
 */

const creaPokemones = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add('img-container');

    const fotoPokemon = document.createElement('img');
    fotoPokemon.src = pokemon.sprites.other.dream_world.front_default;

    contenedorImagen.appendChild(fotoPokemon);

    const numero_pokemon = document.createElement('p');
    numero_pokemon.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name-pokemon')
    name.textContent = pokemon.name;

    card.appendChild(contenedorImagen);
    card.appendChild(numero_pokemon);
    card.appendChild(name);

    contenedor.appendChild(card);

}

/**
 * Espera a que la ventana este cargada para iniciar la carga de pokemones, asegurar el orden y mostrar los pokemones
 */

document.addEventListener('DOMContentLoaded', () => {
    async function fecthPokemones(numero) {
        for(let n = 1; n <= numero; n++)
       await fetchDatos(n);
    }
fecthPokemones(20); 
});