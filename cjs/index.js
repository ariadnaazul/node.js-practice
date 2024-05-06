console.log("hola");

//No tenemos un objeto global llamado window en node, ya que es un entorno completamente diferente al navegador, no tenemos una ventana donde mostramos los datos.

//console.log(window);

//Pero tenemos un objeto global llamado "globalThis" o "global", pero es mejor usar globalThis
console.log(globalThis);

console.log(global);

//En el navegador globalThis y window retornan lo mismo, porque globalThis apunta a window.
//Pero en node.js globalThis apunta a global. Pero cuando lo usamos usamos globalThis.


globalThis.console.log("Console es una propiedad de la variable global globalThis");


//Trabajar con módulos.
//Llevamos la función sum a otro archivo js.
//.js -> por defecto utiliza commonJS
//.cjs -> forzado a usar commonJS

//CommonJS require import
//Forma obsoleta de importar modulos, se importa el archivo en lugar de las funciones.

//const sum = require('./sum');

const {sum} = require('./sum'); //Destructuración de la llave
console.log(sum(1, 3));


