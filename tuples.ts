//tuplas

// en typescript tenemos este nuevo tipo de dato que no esta disponible en javascript
// las tuplas son escencialmente arrays que pueden contener tipos de datos mezclados y un
//numero limitado de elementos
// por ejemplo si tenemos una direccion la podemos definir de esta manera mediante un array

let direccion = ["calle falsa", 123]
// pero en este caso typescript entendera el tipo de dato como any

//si estamos seguros de que nuestro tipo dato no cambiar en el tiempo lo podemos definir como de tipo 
//tupla de siguiente manera

let direccionTupla:[string,number]=["calle falsa",123]

//donde indicamos que el primer elemento sera un string y el segundo un number

