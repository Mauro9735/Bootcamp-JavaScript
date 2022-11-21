
//FUNCIONES FLECHA

// Las funciones flecha son una forma más corta de escribir funciones


const saludarArrow = () => "HOLA!";

// Si la funcion apenas es una linea no hace falta poner el return

console.log("Funcion flecha",saludarArrow());


//EJEMPLO entre funcion normal y función flecha:

//Funcion normal
function doble(valor) {
    return valor*2;
}

//Funcion flecha
const dobleArrow = numero => numero*2;


console.log("Funcion normal", doble(2));
console.log("Funcion flecha", dobleArrow(2));


//EJEMPLO FUNCION FLECHA 2 PARAMETROS:

const restaArrow = (valor1,valor2) => valor1-valor2;
/*
const restaArrow = (valor1,valor2) =>{
     return valor1-valor2;
}  //Otra forma de la sintaxis de función flecha
*/


console.log("Funcion flecha",restaArrow(6,3));


//ERRORES MÁS COMUNES DE LAS FUNCIONES FLECHA

/*
- Primer error olvidar la palabra "return"
-Un error común es devolver un objeto literal en una función flecha en una linea
    //Como devolver el objeto literal en una funcion flecha (Hay que colocar parentesis que encierren el objeto literal)

    const objetoLiteralArrow = () => ({name: ''Mauricio})

*/




//DECLARACIÓN DE UNA FUNCIÓN FLECHA

/*

// FUNCION NORMALEN UNA VARIABLE
const saludar = function () {
  console.log('Hola')
}

saludar()


//FUNCIÓN FLECHA
const saludar = () => {
  console.log('Hola')
}

saludar()

*/


// PRINCIPALES DIFERENCIAS CONS LAS FUNCIONES NORMALES

/*

    No tienen su propio this
    No necesitan la palabra reservada function
    No necesitan los paréntesis si solo tiene un parámetro
    No necesitan las llaves si solo tiene una línea de código
    No necesitan la palabra reservada return si solo tiene una línea de código

*/

//PARAMETROS
const saludar = (nombre) => {
    console.log('Hola ' + nombre)
  }
  
  saludar('Pepe')



//PARAMETROS POR DEFECTO
const saludar2 = (nombre = 'Pepe') => {
    console.log('Hola ' + nombre)
  }
  
  saludar2()



//RETORNO IMPLÍCITO
const saludar3 = (nombre = 'Pepe') => 'Hola ' + nombre

console.log(saludar3())


//RETORNO EXPLÍCITO
const saludar4 = (nombre = 'Pepe') => {
    return 'Hola ' + nombre
  }
  
  console.log(saludar4())


  //PARÁMETROS MÚLTIPLES
  const saludar5 = (nombre = 'Pepe', edad) => {
    return 'Hola ' + nombre + ' tienes ' + edad + ' años'
  }
  
  console.log(saludar5('Juan', 32))


  /*
    NOTA:
    Las funciones flecha son las que más se usan en desarrollos usando React.

  */