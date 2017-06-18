function foo(){
    return 42;
}

foo.bar = "Hello world";

typeof foo;     // "function"
typeof foo();   // "number"
typeof foo.bar; // "string" 