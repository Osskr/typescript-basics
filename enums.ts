// Enums

// son otro tipo de dato agregado por typescript, los enums nos permiten hacer que los numeros
// sean mas descriptivos para definir un enums hacemos lo siguiente

enum Color {
    ROJO,
    VERDE,
    AZUL
}

//luego lo podemos usar de la siguiente manera
let miColor:Color = Color.AZUL

// si imprimimos esto en consola veremos que se trata de un numero asignado por typescript

console.log(miColor) //2

// podemos asignar los valores que tiene cada uno si fuera necesario


enum ANIMALES {
    PERRO=101,
    GATO=201,
    PATO=321
}

let miMascota: ANIMALES = ANIMALES.PATO

console.log(miMascota)