var obj = {
    a: 'Hello world',
    b: 42,
    c: true
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
// Hello world
// 42
// true

console.log(obj["a"]);
console.log(obj["b"]);
console.log(obj["c"]);
// 'Hello world'
// 42
// true

var foo = "a"
console.log(obj[foo]); 
// 'Hello world'
