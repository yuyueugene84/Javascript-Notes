// Javascript 中的 falsy 值為下:

Boolean(""); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false

// Javascript 中的 truthy 值為下:

Boolean("hello"); // true
Boolean(42); // true
Boolean(true); // true
Boolean([]); // true
Boolean([1,2,3]); // true
Boolean({}); // true
Boolean({ foo: "bar"}); // true
Boolean(function(){}); // true