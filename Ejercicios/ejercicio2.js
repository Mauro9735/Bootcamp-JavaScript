// EJERCICIO 32

/*
 Crea una variable llamada nombre y asígnale tu nombre como valor.
 Crea una variable llamada edad y asígnale tu edad como valor.
 Crea una variable llamada mayorDeEdad y asígnale un valor booleano que indique si eres mayor de edad.
 Crea una variable llamada direccion y asígnale un objeto con tu dirección.
 Crea una variable llamada coloresFavoritos y asígnale un array con tus colores favoritos.
 Crea una variable llamada lenguajesFavoritos y asígnale un array con tus lenguajes de programación favoritos.
 Crea una variable llamada mejorLenguaje y asígnale el primer elemento del array lenguajesFavoritos.
 Crea una variable llamada peorLenguaje y asígnale el último elemento del array lenguajesFavoritos.
*/


let nombre  = "Mauricio";
let edad = 23;
let mayorDeEdad = true;
let direccion = {
    calle:37,
    ubicacion: "sur",
    numero:38,
    segundoNumero:05
}
let coloresFavoritos = ["Azul","Rojo","Verde"];
let lenguajesFavoritos = ["JavaScript","Java","MySql","PHP"];
let mejorLenguaje = lenguajesFavoritos[0];
let peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length-1];
