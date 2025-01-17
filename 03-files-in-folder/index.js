const fs = require('fs');
const path = require('path');
  
fs.promises.readdir (path.join(__dirname, 'secret-folder'), {withFileTypes: true})
       .then(filenames => {
        console.log("\nCurrent directory files:");
        for (let filename of filenames) {
            if (filename.isFile()) {
                fs.stat(path.join(__dirname, 'secret-folder', `${filename.name}`), (error, stats) => {
                if (error) {
                  console.log(error);
                }
                else {
                console.log(`${filename.name.replace(/\./, ' - ')} - ${stats.size/1000}kb`) 
                };
            })                         
            }            
        }
    })
       .catch(err => {S
        console.log(err)
    })