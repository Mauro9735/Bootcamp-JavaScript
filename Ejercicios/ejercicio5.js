//EJERCICIO#5

/*
 Crea un array de 3 pokemons.
 Muestra por consola el nombre de cada pokemon.
 Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
 Bonus extra: ¿Cómo se pueda hacer esto con bucles?
 */

let pokemones = ["Pickachu","Charizard","Lucario"];

console.log(pokemones);
console.log(pokemones[0]);
console.log(pokemones[1]);
console.log(pokemones[2]);

for(let i = 0; i<pokemones.length;i++) console.log(`El nombre de los pokemones es: ${pokemones[i]}`);