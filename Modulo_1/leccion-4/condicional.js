
// CONDICIONAL IF

const edad = 10;

if(edad>5){
    console.log("Mayor que 5");
}else if(edad < 3){
    console.log("Es menor que 3");
}else{
    console.log("No sé lo que es");
}

// IF TERNARIO

edad > 5 ? console.log("Mayor que 5"): edad < 3 ? console.log("Menor que 3") : console.log("No se que es"); 


// OPERADORES LÓGICOS

/*

- Operador Lógico AND: Se representa con "&&"

    El operador && nos permite combinar dos condiciones. Se cumple si se cumplen las dos condiciones.

    EJEMPLO:

        const edad = 32
        const dinero = 1000

        if (edad >= 18 && dinero >= 1000) {
        console.log('Eres mayor de edad y tienes dinero')
        }


- Operador Lógico OR: Se representa con "||"

    El operador || nos permite combinar dos condiciones. Se cumple si se cumple alguna de las dos condiciones.

    EJEMPLO:
    
        const edad = 32
        const dinero = 1000

        if (edad >= 18 || dinero >= 1000) {
        console.log('Eres mayor de edad o tienes dinero')
        }


- Operador lógico NOT: Se representa con "!"
    El operador ! nos permite negar una condición.

    EJEMPLO:

        const edad = 32

        if (!edad >= 18) {
        console.log('No eres mayor de edad')
        }

*/


//OPERADORES DE COMPARACIÓN

/*

- Operador ==:

    El operador == nos permite comparar dos valores. Se cumple si los dos valores son iguales.

    EJEMPLO:
    
        const edad = 32

        if (edad == 18) {
        console.log('Tienes 18 años')
        }


- Operador ===:

    El operador === nos permite comparar dos valores. Se cumple si los dos valores son iguales y del mismo tipo.

    EJEMPLO:

        const edad = 32

        if (edad === 18) {
        console.log('Tienes 18 años')
        }

- Operador !=:

    El operador != nos permite comparar dos valores. Se cumple si los dos valores son diferentes.

    EJEMPLO:
    
        const edad = 32

        if (edad != 18) {
        console.log('No tienes 18 años')
        }


- Operador !==:

    El operador !== nos permite comparar dos valores. Se cumple si los dos valores son diferentes y/o de diferente tipo.

    EJEMPLO:
        
        const edad = 32

        if (edad !== 18) {
        console.log('No tienes 18 años')
        }

*/


//OPERADORES DE COMPRACIÓN NUMÉRICOS

/*


Los operadores de comparación numéricos nos permiten comparar dos valores numéricos.

Se usan igual que en matemáticas.

Menor que: <, Menor o igual que: <=, Mayor que: >, Mayor o igual que: >=

*/