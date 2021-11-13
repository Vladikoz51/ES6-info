// Тернарная операция состоит из трех операндов и имеет следующее определение:
// [первый операнд - условие] ? [второй операнд] : [третий операнд]

// В зависимости от условия в первом операнде тернарная операция возвращает второй или третий операнд. Если условие в
// первом операнде равно true, то возвращается второй операнд; если условие равно false, то третий. Например:
let a = 1;
let b = 2;
let result = a < b ? a: b;
console.log(result); // 1

// В качестве операндов также могут выступать выражения:
a = 1;
b = 2;
result = a < b ? a + b : a - b;
console.log(result); // 3


//----------------------------------------------------Оператор ??-------------------------------------------------------
// Оператор ?? (nullish coalescing operator) позволяет проверить значение на null и undefined. Он принимает два операнда:
// левый_операнд ?? правый_операнд
// Оператор возвращает значение левого операнда, если оно НЕ равно null и undefined. Иначе возвращается значение
// правого операнда. Например:
const result1 = "hello" ?? "world";
console.log(result1);   // hello

const result2 = 0 ?? 5;
console.log(result2);   // 0

const result3 = "" ?? "javascript";
console.log(result3);   // "" - пустая строка

const result4 = false ?? true;
console.log(result4);   // false

const result5 = null ?? "not null";
console.log(result5);   // not null

const result6 = undefined ?? "defined";
console.log(result6);   // defined

let message = null;
const hello = "Hi JavaScript";
const result7 = message ?? hello;
console.log(result7);   // Hi JavaScript


//-------------------------------------------------------Оператор =??---------------------------------------------------
// Оператор ?? имеет модификацию в виде оператора ??=, который также позволяет проверить значение на null и undefined.
// Он принимает два операнда:
// левый_операнд ??= правый_операнд

// Если левый операнд равен null и undefined, то ему присваивается значение правого операнда. Иначе левый операнд
// сохраняет свое значение. Например:
message = "Welcome to JavaScript";
let text = "Hello work!"
text ??= message;
console.log(text);  // Hello work!

message = "Welcome to JavaScript";
text = null;
text ??= message;
console.log(text);  // Welcome to JavaScript