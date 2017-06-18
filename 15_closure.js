// inner function can access the variable in the parent function

function init() {
  var name = 'Bonjour Le Monde!'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function    
  }
  displayName();    
}

init();
