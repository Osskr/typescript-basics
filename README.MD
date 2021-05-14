# TypeScript Basics

En este repo voy a ir subiendo todo lo que vaya aprendiendo sobre Typescript, junto con algunos snippets que sean interesantes.


## Indice
1- configuracion basica






#### Configuracion Basica

Instalamos TypeScript de manera global
`npm i -g typescript`

Una vez instalado, dentro de nuestro proyecto es conveniente crear el archivo de configuracion de typescript, esto es muy similar al package.json. Este archivo le va a indicar a typescript como queremos que se compile nuestro codigo, para eso usamos

`tsc --init`

*Podemos editar ese archivo segun nuestras preferencias, mas adelante lo explicamos con mas detalle*

luego utilizando el comando `tsc` se va a leer el archivo config y se va a compilar nuestro codigo en un .js valido.

podemos instalar `tslint`  como dependencia de desarrollo para que nos ayude a seguir con los estandares de desarrollo

`npm i tslint --save-dev`

*typescript debe estar instalado como dependencia local en nuestro proyecto para que tslint funcione *

tslint tambien necesita de un archivo de configuracion lo creamos de la siguiente manera

`./node_module/.bin/tslint --init`

finalmente podemos utilizar el comando `tsc --watch`   para que cuando haya cambios en nuestro codigo .ts typescript automaticamente compile y genere los archivos o cambios pertinentes.

