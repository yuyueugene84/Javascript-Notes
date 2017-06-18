/* JS before ES6 does not have block statement scope,
 a variable declared within a block is local to the function 
(or global scope) that the block resides within. */

if (true) {
  var x = 5;
}
console.log(x);  // x is 5

/* in ES6 however... */

if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined