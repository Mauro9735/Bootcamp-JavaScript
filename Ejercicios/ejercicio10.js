//EJERCICIO #10

//Crea una función que reciba un número y muestre por consola si es par o impar.

const parEimpar = numero =>{
    if(numero%2===0) return "Es par";
    else return"Es impar";
}

console.log(parEimpar(10));