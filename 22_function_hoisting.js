/* only the function declaration gets hoisted to the top and not the 
function expression.*/


// this is function declaration
foo(); // bar

function foo(){
    console.log('bar');
}

// this is function expression
baz();

var baz = function(){
    console.log('bar2');
}