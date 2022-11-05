//EJERCICIO#6

/*
 Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
 Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.
*/

const pokemones = [
    {
        nombre:"Pickachu",
        tipoDePokemon:"Electrico"
    },
    {
        nombre:"Charizard",
        tipoDePokemon: "Fuego"
    },
    {
        nombre:"Gyarados",
        tipoDePokemon: "Agua"
    }
]

if(pokemones[1].tipoDePokemon === "Fuego") console.log("Es un pokemon de fuego!");