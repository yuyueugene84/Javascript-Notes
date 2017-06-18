/* this 經常被誤認和物件導向有關，但是在 JS 中，它實際上是不同的機制
若一個函式有 this 參考，那麼這個 this 參考通常指向一個 object，止於是
哪個物件取決於函式被呼叫的方式 */

function foo(){
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
}

foo();          // "global", in strict mode it's undefined
obj1.foo();     // obj1
foo.call(obj2); // obj2
new foo();      // undefined
