// == 和 === 的差別是檢查運算子的相等性，但是允許或不允許強制轉型

var a = "42";
var b = 42;

console.log(a == b);  // true
console.log(a === b); // false

// 比較 non-primitive (基型值)，像是 obj，需要小心，因為這些值實際是參考 (by reference)
// 因此會比較參考是否相等，而不是值

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c; // true
b == c; // true
a == c; // false