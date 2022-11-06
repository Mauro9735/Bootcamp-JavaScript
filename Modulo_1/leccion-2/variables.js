//VARIABLES


const instructor = "Pepe";

//VAR - LET -CONST

var edad = 32; //Alcance (Scope) Global (Acceder desde otros archivos) - Puede ser redeclarada y reasisgnada

let pais = "España"; // Alcance (Scope) definido por bloque (Expresion o archivo) - Puede ser reasignada pero no redeclarada


//DIFERENCIA - LET Y CONST

let mascota = "Perro";
mascota = "Gato";

const animal = "Pajaro";
animal = "Hamster"; // -> Esto es un error, las variables const no se pueden reasignar
