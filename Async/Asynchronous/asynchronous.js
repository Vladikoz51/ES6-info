//---Asynchronous------
//"I will finish later!"

//Functions running in parallel with other functions are called asynchronous

//A good example is JavaScript setTimeout()

// const addSomeInDiv = () => document.getElementById("container").innerHTML = "I learn JavaScript!!!"
//
// //When you pass a function as an argument, remember not to use parenthesis.
// setTimeout(addSomeInDiv, 3000);
//
// // Как вариант в качестве аргумента можно передать объявление функции
//
// const addSomeInDiv2 = (value) => document.getElementById("container-2").innerHTML = value
//
// setTimeout(function () {addSomeInDiv2("I learn HTML!!!");}, 6000);


// Рассмотрим пример с ожиданием загрузки файла, мы не можем использовать файл пока он полностью не загрузится, это
// отличное время для использования колбэка.

// function myDisplayer(some) { // функция добавляющая что-то в div контейнер
//     document.getElementById("demo").innerHTML = some;
// }
//
// function getFile(myCallback) { // функция получающая файл с сервера, с коллбеком в параметре
//     let req = new XMLHttpRequest(); // создаем объект для отправки запроса
//     req.open('GET', "mycar.html"); // открываем соединение (указываем метод и url)
//     req.onload = function() { // определяем метод onload, который запустится после загрузки файла
//         if (req.status == 200) {
//             myCallback(this.responseText); // если файл успешно загружен вызываем нашу коллбэк функцию с ответом
//                                            // в качестве аргумента
//         } else {
//             myCallback("Error: " + req.status);
//         }
//     }
//     req.send(); // отправляем запрос на сервер
// }
// // вызываем функцию с аргументом myDisplayer в качестве коллбека, таким образом коллбэк сработает не сразу, а только
// // в случае успешной загрузки файла
// getFile(myDisplayer);

console.log("Hello");
console.log("Hello2");
setTimeout(function () {console.log("hello3")},3000);
console.log("Hello4");


