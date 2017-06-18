/* read-only, named constant, a constant cannot change value while the 
script is running, it has to be initialized to a value */

const PI = 3.14;

/* the scope for const is the same as let, you cannot declare a constant 
with the same name as a function or variable in the same scope */

function f(){};
const f = 5; // SyntaxError: Identifier 'f' has already been declared


function f() {
  const g = 5;
  var g;
}

f(); // SyntaxError: Identifier 'g' has already been declared

// but the properties of object assigned to const is not protected
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';