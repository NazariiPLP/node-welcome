'use strict';

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
.then((content) => {
    const newContent = `OLD content: ${content} and NEW content: 'Hello world'`;
    fs.writeFile('./newfile.txt', newContent, 'utf8'); // Перезаписує файли!!!
});
