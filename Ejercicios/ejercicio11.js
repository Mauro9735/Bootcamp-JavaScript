//  EJERCICIO #11

//Dado el siguiente array de personas:


const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];

  
  /*
 Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
 Dime cual es la persona más joven del array.
 Dime cual es la persona más mayor del array.
  */


 const personasMayores = array =>{

    const personasMayoresEdad = [];
    let personaMayor;
    let personaMenor;
    for(let i = 0; i < array.length;i++){
        if(array[i].edad >= 18) personasMayoresEdad.push(array[i])
    }

    for(let i = 0; i< array.length-1;i++){
        if(array[i].edad>array[i+1].edad) personaMayor = array[i].nombre;
        if(array[i].edad<array[i+1].edad) personaMenor = array[i].nombre;
    }

    console.log(`La persona de mayor edad es: ${personaMayor}`);
    console.log (`La persona de menor edad es: ${personaMenor}`);
    return (personasMayoresEdad);
 }


console.log(personasMayores(personas));