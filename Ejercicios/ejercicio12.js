//EJERCICIO #12

/*
 Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
 También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.
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
    },
    {
        nombre:"Growlithe",
        tipoDePokemon: "Fuego"   
    },
    {
        nombre:"Ponyta",
        tipoDePokemon: "Fuego"   
    }
]

const nombrePokemones = array =>{
    array.forEach(element => {
        console.log(element.nombre);
    });
}
console.log("Nombre de pokemones:");
nombrePokemones(pokemones);

const pokemosTipoFuego = array =>{
    array.filter(element =>{
        if (element.tipoDePokemon === "Fuego") {
            console.log(element.nombre);
        }
    })
}

console.log("Pokemones de tipo fuego:");
pokemosTipoFuego(pokemones);