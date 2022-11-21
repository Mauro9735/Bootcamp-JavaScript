// const edad = 18;

// edad >= 18 ? console.log("Eres mayor de edad"):console.log("No eres mayor de edad");


//TIPOS DE CONSOLE LOG

//let parametro = 16;

//console.log("No eres mayor de edad con la siguiente edad " + parametro); --> Devuelve una concatenación tipo string = "No eres mayor de edad con la siguiente edad 16"
//console.log("No eres mayor de edad con la siguiente edad ",parametro); --> Devuelve una el string y el tipo de dato de la variable = "No eres mayor de edad con la siguiente edad " 16
//console.log(`No eres mayor de edad con la siguiente edad ${parametro}`); --> Devuelve una concatenación tipo string = "No eres mayor de edad con la siguiente edad 16"


//FUNCION DECLARADA

function calcularMayoriaDeEdad(parametro) {
    if(parametro >= 18) console.log(`Eres Mayor de Edad, ya que tienes ${parametro} años`);
    else console.log("No eres mayor de edad con la siguiente edad " + parametro);
}

calcularMayoriaDeEdad(16);
calcularMayoriaDeEdad(18);

//return es un palabra reservada(Se usa dentro de las funciones) -> Se usa para guardar un valor de una función 
//despues de un return no se devuelve nada

function suma (val1,val2){

    return (val1 + val2);
}

const resultado = suma(1,1);

console.log(resultado);


// Para declarar una funcion usamos la palabra reservada "function" seguida del nombre de la función y entre paréntesis los parámetros que recibe

/*
    function saludar() {
        console.log('Hola')
    }

*/


/*
Una función tiene un scope global y puede ser llamada/invocada desde cualquier parte del código. Esto cambia si la función está dentro de otra función.

Una función también puede crearse y asignarse a una variable.


    EJEMPLO:
    const saludar = function() {
        console.log('Hola')
    }

    saludar()

*/


//Parámetros de una función

/*
Los parámetros son los valores que recibe una función. Para declararlos, los escribimos entre paréntesis y separados por comas en caso de que haya más de uno.


    *EJEMPLO:

    function saludar(nombre) {
        console.log('Hola ' + nombre)
    }

    saludar('Pepe')


    *EJEMPLO DE FUNCIÓN CON 2 PARÁMETROS:

    function sumar(num1, num2) {
        console.log(num1 + num2)
    }

    sumar(2, 3)



    * EJEMPLO DE FUNCION CON PARÁMETROS OPCIONALES Y PARÁMETROS POR DEFECTO:

    function saludar(nombre = 'Pepe', edad) {
        console.log('Hola ' + nombre + ' tienes ' + edad + ' años')
    }

    saludar('Juan', 32) // Hola Juan tienes 32 años
    
    saludar('Juan') // Hola Juan tienes undefined años

    saludar(undefined, 32)  // Hola Pepe tienes 32 años


    *EJEMPLO DE FUNCIÓN CON OTRA FUNCIÓN COMO PARAMETRO:

    function saludar(fn) {
        fn()
    }

    function decirHola() {
        console.log('Hola')
    }

    saludar(decirHola)


NOTA:

Un consejo en cuanto a clean code es que no se pasen más de 3 parámetros a una función, en caso de que sea necesario, se puede pasar un objeto con los parámetros.


    function sumar(objetoNumero) {
    console.log(objetoNumero.num1 + objetoNumero.num2 + objetoNumero.num3 + objetoNumero.num4 + objetoNumero.num5)
    }

    const numerosEnUnObjeto = {
        num1: 1,
        num2: 2,
        num3: 3,
        num4: 4,
        num5: 5
    }

    sumar(numerosEnUnObjeto) // 15


*/




//RETORNO DE UNA FUNCIÓN
/*

Una función puede devolver una valor. Para hacerlo, usamos la palabra reservada "return" seguida del valor que queremos devolver

    EJEMPLO:
        function sumar(a, b) {
            return a + b
        }

        const resultado = sumar(2, 3)

        console.log(resultado) // Devuelve 5

En caso de que no haya un "return" en la función, esta devolverá "Undefined".

    EJEMPLO:

        function saludar() {
            console.log('Hola')
        }

        const resultado = saludar()

        console.log(resultado) // undefined


Hay que tener en cuenta que una vez que se ejecuta un return en una función, esta se detiene y no se ejecuta nada más.

    EJEMPLO:

    function sumar(a, b) {
        return a + b
        console.log('Esto no se ejecuta')
    }

const resultado = sumar(2, 3)

console.log(resultado) // 5   
        

*/








/*

Recuerda que las variables declaradas dentro de una función no son accesibles desde fuera de la función.

*/
