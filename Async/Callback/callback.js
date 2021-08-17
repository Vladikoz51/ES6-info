//---Callback---

// A Callback is a function passed as an argument to another function.

const print = some => console.log(some);

// У функции calculate есть параметр Callback, который представляет собой функцию, которая будет вызвана в теле функции
// calculate
const calculate = (a,b, callback) => {
    let sum = a + b;
    callback(sum);
}
// При вызове calculate мы передаем функцию print в качестве колбэка
calculate(22, 33, print);
//When you pass a function as an argument, remember not to use parenthesis.
