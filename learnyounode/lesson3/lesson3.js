var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
//console.log('--- str ---', str);
var newLineArr = str.split('\n');
//console.log('--- str ---', newLineArr);
console.log(newLineArr.length - 1);
