const fs = require('node:fs/promises')

fs.stat('os-info'); //Si da errror es que no existe ese directorio. En promesas no tenemos "exist"
fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        if (err) {
            console.error('Error al leer el directorio', err)
            return;
        }
    })


    //Seguimos con process, tiempo de video - 1:22


