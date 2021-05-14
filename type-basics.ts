//Tipos Basicos en ts, tenemos los mismo que en js pero la diferencia es que aca podemos explicitarlos

//Strings

let myName = 'Osskr';
// en Ts una vez que asignamos un tipo a una variable no podemos reasignarle otro valor que contenga un tipo diferente

//myName = 12;
//nos daria un error porque anteriormente ts infirio que el tipo de dato que tenia MyName es de tipo string

//number
let MyAge=28;
let  temperature = 34.2;

// son inferidas como de tipo numerico , a ts no le importa si los numeros son integers o floats

//boolean
let esValido = true;

//Si intentamos reasignar a 
//esValido = 1; 
// Esto nos va a dar un error : Type 'number' is not assignable to type 'boolean'.
// porque ts entiende que estamos intentando asignar un numero a una variable de tipo boolean 


// Definiendo tipos de manera explicita
 
//type any
//si declaramos una variable sin asignar un valor 
let unaVariable;
// y luego asigamos un valor de tipo string
unaVariable = '10'
//y luego asignamos un valor numerico
unaVariable = 10;
// esto no nos daria un error porque typescript infiere que es del tipo any, este es un tipo de dato especial en ts, y
// que implica es que podemos re asignar cualquier tipo de dato a esa variable, como pasa en vanilla javaScript
// el problema de esto es que perdemos los beneficios que nos data typescript;

//podemos ser explicito con los tipos de datos  usando la siguiente sintaxis

let miEdad: number;
//ahora si asignamos a miEdad
miEdad=32;
//y luego  intentamos reasignar con un valor de tipo string(u otro tipo diferente de number) vamos a tener un error
//miEdad='32';

//con otros tipos de datos tendriamos 

let miNombre: string;
let valido: boolean;