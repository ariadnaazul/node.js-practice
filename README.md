---------------------------------------------------------------------------------------------------------

INTRO

Node.js es un entorno de ejecución para java script sin ser un navegador.
Incluso la nintendo tiene Node.
Es asincrono con In Out y una arquitectura orientada a eventos. Tiene un bucle en el cual maneja las solicitudes, realiza tareas mientras espera. Simula que hace màs de una cosa a la vez. Es monoproceso.
Consume mas memoria pero da otras ventajas.
Ejecuta en em mismo motor que Chrome, pero diferente entorno.

Se creo en 2009. Por que estaba limitado por apache http server.
2015 se uniò con otro proyecto y es parte de la open source foundation.

Dockerizar app?
Usar docker?

npm - node version manager. Permite cambiar entre versiones de node.js para trabajar sobre numerosos proyectos.

Opciones:
- fnm + rust
- nvm-windows

---------------------------------------------------------------------------------------------------------

MODULOS

Dos sistemas de modulos.

mjs (utiliza ecma script modules) es para archivos js que utilizar por defecto la forma más actual de importar módulos, importando y exportando funciones en lugar de archivos. 

commonJS o cjs, la forma que funcion por defecto en archivos .js o que se puede forzar en archivos .jsx y exporta e importa archivos por lo cual está un poco obsoleta o no es la mejor opción, a diferencia de mjs.

ES y commonJS se pueden usar juntos en el mismo proyecto pero no es recomendable.

En ES modules las especificaciones de extensión son obligatorias. 

Webpack resuelve pero es recomendado usarla.

En commonJS no hace falta.

---------------------------------------------------------------------------------------------------------


MODULOS NATIVOS

Node.js cuenta con una biblioteca de modulos nativos.


os : para información del sistema opertavio.

fs : file sistem, es uno de los más importantes.

---------------------------------------------------------------------------------------------------------

FUNCIONES DE ORDEN SUPERIOR

Las funciones que devuelven otras funciones se conocen como funciones de orden superior, también llamadas callbacks y pueden ser sincronas o asincronas.

---------------------------------------------------------------------------------------------------------

JS SINCRONO Y ASINCRONO

Node.js es monohilo, sólo tiene un proceso y está baasado en eventos.
Podemos hacer cosas de forma sincrona, que por lo tanto van a bloquear el proceso y esperar a terminar esa tarea para seguir con la siquiente.
O de forma asincrona, utilizando la arquitectura de eventos. 

Cuando utilizamos JS asincrono va a reconocer un proceso principal, pero las entradas y salidas estan fuera del proceso principal.
Puede esperar mientras ejecuta el resto del código.
Los callback se ejecutarán cuando termina el evento, o tarea asincrona de larga duración, como leer un archivo.
No podemos saber en que orden nos van a llegar los callback porque no sabemos cual tarea de larga duración terminará antes. 

SINCRONO: Es cuando se ejecuta una operación de entrada/salida de manera secuencial, por lo que debemos de esperar a que se complete para poder procesar el resultado.

ASINCRONO: Puede iniciar una tarea de larga duración y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha tarea ha finalizado, tu programa presenta el resultado.

---------------------------------------------------------------------------------------------------------

ASINCRONO CALLBACK

Asincrono no secuencial, el orden de los callbacks puede varíar según termine primero la ejecución de una u otra tarea.


---------------------------------------------------------------------------------------------------------

PROMESAS - ASINCRONO 

Las promesas también son código asincrono.
Historicamente node.js usaba callbacks. Hay documentación actualizada sobre las promesas.
{promisify} ---> es una alternativa para cuando la versión de node no lee promesas nativas.

Las promesas aseguran el orden de ejcusión de los callbacks.


---------------------------------------------------------------------------------------------------------

ASYNC AWAIT - ASINCRONO SECUENCIAL

No se puede utilizar en commonJS.
Pero si en ES Module (top level await).

Si queremos utilizar sync awai en commonJS podemos hacerlo con modulos (invocando la ejecusión de código dentro de una función async) y podemos usar IFFE.

En realidad el código parece asincrono, se ejecuta como asincrono, el proceso se queda libre y se liberan recursos, pero aún así es secuencial, por lo que hasta que no termina una tarea y devuelve la promesa realmente no inicia otra.

---------------------------------------------------------------------------------------------------------

IFFE - Inmediatly invoked function expression.

Es lo mismo que declarar una función y ejecutarla luego, solo que una IFFE es anonima y se ejecuta directamente.

---------------------------------------------------------------------------------------------------------

ASINCRONO PARALELO

Es más rápido. Reduce el tiempo de proceso global de una agregación.
Es asincrono, puede responder a otros eventos mientras ejecuta una tarea de larga duración.
Puede ejecutar simultaneamente varios códigos de forma paralela en lugar de secuencial. 

Permite controlar el orden de ejecución.
