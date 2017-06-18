// javascript 擁有具有型別的值 (typed values)，而非具有型別的變數 (typed variables)
// typeof 回傳的是 a 變數裡的值的型別
var a;
console.log(typeof(a)); // "undefined"
var a = 'Hello World!';
console.log(typeof(a)); // "string"
var a = 42;
console.log(typeof(a)); // "number"
var a = true;
console.log(typeof a); // "boolean"
var a = null;
console.log(typeof a); // "object", weird!
var a = [1,2,3];
console.log(typeof a); // "object"
var a = { a: 'foo', b: 'bar'};
console.log(typeof a); // "object"
const foo = Symbol();
console.log(typeof(foo)); // "symbol"
// typeof 回傳的是 string
console.log(typeof(typeof(foo))); // "string"