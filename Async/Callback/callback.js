//---Callback---

// A callback is a simple function that's passed as a value to another function, and will only be executed when the
// event happens.

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
