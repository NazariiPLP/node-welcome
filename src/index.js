'use strict';

const _ = require('lodash');

const randomNumber = Number(_.random(1, 10, true).toFixed(2));

console.log('--->>> START <<<---');
console.log(randomNumber);
console.log('--->>> END <<<---');

const div = document.queryselector('#root');
div.append('HELLO WEBPACK');

/*

App.js ->         |
Dashboard.js ->   | Bundler (Webpack) | bundle.js
About.js ->       |

Бандл - код різних модулей, зібраний в одному файлі


1. Production
2. Development  

*/