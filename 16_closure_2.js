//  function 執行完畢後，讓你記住並持續存取一個 function 
// 的 scope 裡的變數的方式

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5); // [Function] 

console.log(add5(2));  // 7
console.log(add10(2)); // 12