let contenedor = document.querySelector('.contenedor');

document.addEventListener('DOMContentLoaded', () => {
    function fecthPokemones(numero) {
        for(let n = 1; n <= numero; n++)
        fetchDatos(n);
    }
fecthPokemones(20); 
});


const fetchDatos = async (id) => {
    try {
        const fetch_datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await fetch_datos.json()
        creaPokemones(data);
        console.log(data)
    } catch (error) {
        console.log(error);
    }
};

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
