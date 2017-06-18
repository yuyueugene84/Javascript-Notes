/* 當你參考一個物件上的某個特性，若該特性並不存在， javascript 或自動使用該
物件內部的 prototype reference，在另外的物件上尋找該特性，可以說是一種特性
缺少時的後備機制 (fallback) */

var foo = {
    a: 42
}

var bar = Object.create( foo );

bar.b = "hello world!";

console.log(bar.b); // hello world!
console.log(bar.a); // 42 <-- delegated to 'foo'

/* prototype is often being used to mimic inheritance from OOP, 但是實際上
應用 prototype 較為自然的方式是 behaviour delegation ，刻意將將一個物件部分
所需的行為委派給其他物件 */
