// Стрелочные функции(Arrow functions)

//------- Обычная функция------------
function sqrt(num) {
    if (typeof num === "number" && num > 0) {
        console.log(Math.sqrt(num));
    }
    else {
        console.log("Введите положительное число");
    }
}

//------------- Стрелочная функция-----------
const arrSqrt = (num) => {
    typeof num === "number" && num > 0 ? console.log(Math.sqrt(num)) : console.log("Введите положительное число");
}

/* Если тело функции состоит только из одной строчки то фигурные скобки и return можно опустить , также если у функции только один
* параметр то круглые скобки тоже можно опустить*/
const arrSqrt2 = num =>
    typeof num === "number" && num > 0 ? console.log(Math.sqrt(num)) : console.log("Введите положительное число");

sqrt(16);
sqrt(92);
sqrt("92");

arrSqrt(16);
arrSqrt(92);
arrSqrt("92");

arrSqrt2(16);
arrSqrt2(92);
arrSqrt2("92");

//------Стрелочная функция и this--------------

//---Пример с call()----------
// const obj = {
//     name: "Vladimir",
//     age: "Kozemaslov",
//     // Если метод у объекта задан при помощи function то при вызове метода call() все работает, контекст функции
//     // поменяется на obj2.
//     // fullName: function() {
//     //     console.log(`${this.name} ${this.age}`);
//     // }
//
//     /* fullName: function() { // Если метод у объекта задан при помощи стрелочной функции то при вызове метода call()
//     результат будет undefined, так как у стрелочной функции невозможно изменить контекст, this всегда указывает на объект
//     где было объявлена стрелочная функция/
//      */
//     // fullName: () => {
//     //     console.log(`${this.name} ${this.age}`);
//     // }
// }

// const obj2 = {
//     name: "Aliya",
//     age: "Kozemaslova",
// }
// obj.fullName.call(obj2);

//----Пример с DOM деревом


//  this у обычной функции означает объект который ее вызывает
// function getThis() {
//     return document.getElementById("container").innerHTML = this;
// }


// // выводит объект object Window, т.к была вызвана объектом window после загрузки страницы
// window.addEventListener("load", getThis);
//
// // выводит object HTMLButtonElement, т.к. была вызвана объектом button при нажатии на кнопку
// document.getElementById("button").addEventListener("click", getThis);


// // this у стрелочной функции означает объект в котором эта функция была объявлена
// const getThis = (id) => document.getElementById(id).innerHTML = this;
//
// // выводит объект object Window, т.к была объявлена в объекте window
// window.addEventListener("load", getThis("container"));
//
// // также выводит объект object Window, т.к хоть и была вызвана объектом button но не изменила контекст
// document.getElementById("button").addEventListener("click", getThis("container-2"));

new XMLHttpRequest()
