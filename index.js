'use strict';

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
.then((content) => {
    const newContent = `\nAPPEND OLD content: ${content} and NEW content: 'Hello world'`;
    // fs.writeFile('./newfile.txt', newContent, 'utf8'); // Перезаписує файли!!!
    fs.appendFile('./newfile.txt', newContent, 'utf8'); // Дописує файли
});

/*

Задача: замінити якусь частину файлу

1. Читаємо весь файл через readFile -> ВЕСЬ вміст файлу
2. Якось змінюємо вміт через Js -> ту чатсину вмісту файлу, яка нам потрібна
3. Перезаписати цільовий файл через writeFile тими даними, які були отримані у п. 2

*/