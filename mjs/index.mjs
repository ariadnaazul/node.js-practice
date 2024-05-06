//.mjs -> por defecto utiliza ES Modules (ecma script modules)

//Forma más actual de importar modulos, se importan las fucniones no el archivo.

//Permite importar más de una función desde el módulo.
import {sum, mult} from './sum.mjs';

console.log(sum(1,2));

console.log(mult(3,3));