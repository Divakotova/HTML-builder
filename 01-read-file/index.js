const fs = require('fs');
const path = require('path');

let steam = fs.createReadStream(path.join(__dirname, 'text.txt'))

steam.on('data', (data) => console.log(data.toString()))