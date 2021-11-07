const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const bundleCss = fs.createWriteStream(path.join(__dirname, 'project-dist','bundle.css'))

fsPromises.readdir(path.join(__dirname, 'styles'), {withFileTypes: true})
.then(filenames => {
    for (let filename of filenames) {
        const readFile = fs.createReadStream(path.join(__dirname, 'styles', `${filename.name}`))
        if (filename.isFile() && filename.name.includes('.css')) {
            readFile.on('data', (data) => bundleCss.write(data))
     } 
    }
})
.catch(err => {
    console.log(err)
})