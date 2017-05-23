// console.log("HELLO WORLD");
// console.log(process.argv);
// function add(line){
//   var sum = 0;
//   for (let i=2; i<line.length;i++){
//     sum += parseInt(line[i]);
//   }
//   console.log(sum);
// }
//
// add(process.argv);

var fs = require('fs')
var string = fs.readFileSync(process.argv[2])
string = string.toString();
// string.split('\n');
console.log(string.split('\n').length-1);
