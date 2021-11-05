const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

fsPromises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }).then(function() {
    console.log('Directory created successfully');
}).catch(function() {
    console.log('failed to create directory');
});

fs.promises.readdir(path.join(__dirname, 'files'), {withFileTypes: true})
.then((files) => {
    for (let file of files) {
        fsPromises.copyFile(path.join(__dirname, 'files', `${file.name}`), path.join(__dirname, 'files-copy', `${file.name}`))
.then(function() {
  console.log(`File ${file.name} Copied`);
})
.catch(function(error) {
  console.log(error);
});      
    }
})
.catch(error => {
    console.log(error)
})