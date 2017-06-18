// Coercion (強制轉型) 分為 Explicit (明確) 和 implicit (隱約) 兩種，若你能從程式碼看出轉換，就是 explicit
// 若是因為伴隨其他作業所發生的不明副作用，就是 implicit

// explicit exmaple:
var a = "42";
var b = Number(a);

console.log(a); // "42"
console.log(b); // 42

// implicit example:
var a = "42";
var b = a * 1; // "42" implicit coercion to 42

console.log(a); // "42"
console.log(b); // 42