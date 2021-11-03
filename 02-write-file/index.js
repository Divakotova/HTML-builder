const fs = require('fs');
const path = require('path');
const { stdout, stdin, exit } = require('process');
const EventEmitter = require('events');
const emitter = new EventEmitter();

const output = fs.createWriteStream(path.join(__dirname, 'destination.txt'));

stdout.write('Введите, пожалуйста, текст послания\n')
stdin.on('data', (data) => {
    const string = data.toString().trim();
    if (string === 'exit') {emitter.emit('exit')}
    output.write(data); 
     });
emitter.on('exit', () => {stdout.write('Удачи! и до встречи'); exit()});
process.on('SIGINT', () => {stdout.write('Удачи! и до встречи'); exit()})
