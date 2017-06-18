/* in javascript, it is possible to refer a variable and declare 
it later, without getting an exception, this is called hoisting.
But a hoisted variable will return undefined */


// Ex.1 
console.log(x === undefined); // true
var x = 3;

// the above is read by js like:
var x;
console.log(x === undefined); // true
x = 3;



// Ex.2
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

// is being read by js like:
var myvar = 'my value';
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = 'local value';
})();


/* Because of hoisting, all var statements in a function should be 
placed as near to the top of the function as possible. This best
 practice increases the clarity of the code. */

/* let won't let you do hoisting, any variable is in temporal danger
zone until processed */

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;

let z;
console.log('The value of x is ' + z); // The value of z is undefined