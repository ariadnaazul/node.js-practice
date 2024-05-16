const fs = require('node:fs')

fs.readdir('.', (err, files) => { //Por regla se pone el error primero, es a drede para que no olvidemos definirlo.
    if (err){
        console.log('Error al leer el directorio', err)
        return; //Para evitar seguir ejecutando el código.
    }
    files.forEach(file => {
        console.log(file)
    })
})