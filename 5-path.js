const path = require('node:path')


//unir rutas con path.join

const filePath = path.join('.', 'content', 'subfolder', 'test.txt')
console.log(filePath)

//Esto está prohibido
//'.content/subfolder/test.txt'

//Porque..

// -> unix / 
// -> windows \

console.log(path.sep) //Retorna la barra separadora de carpetas según el sis. operativo


//No todos los sistemas operativos utilizan la misma barra de separación


const base = path.basename('tmp/secret-files/password.txt')
console.log(base)

const fileName = path.basename('tmp/secret-files/password.txt', '.txt')
console.log(fileName)

const extension = path.extname('image.jpg')
console.log(extension)

