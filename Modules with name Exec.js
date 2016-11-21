var arg1 = process.argv[2];
var arg2 = process.argv[3];
import {sqrt} from './Modules with name.js';
import {square} from './Modules with name.js';
import {PI} from './Modules with name.js';
//var PI = require('./Modules with name.js').PI;
//var sqrt = require('./Modules with name.js').sqrt;
//var square = require('./Modules with name.js').square;

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));


//    console.log(message); // Hello Babel
