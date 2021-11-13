// WeakMap представляет развитие коллекции Map. Особенностью WeakMap является то, что все ее элементы должны
// представлять объекты. При этом объектами должны быть как ключи, так и значения.
// пустой WeakMap
let weakMap1 = new WeakMap();
// WeakMap с инициализацией данными
let key1 = {key:1};
let key2 = {key:2};
let value1 = {name: "Tom"};
let value2 = {name: "Sam"};
let weakMap2 = new WeakMap([[key1, value1], [key2, value2]]);
// или так
// const weakMap2 = new WeakMap([[{key:1}, {name: "Tom"}], [{key:2}, {name: "Sam"}]]);
// Стоит отметить, что объект WeakMap не поддерживает итерацию.


//--------------------------------------Добавление/изменение элементов--------------------------------------------------
// Для добавления новых объектов или изменения старых применяется метод set():
weakMap2 = new WeakMap([[key1, value1]]);
weakMap2.set(key2, value2);
weakMap2.set(key1, {name: "Kate"});
console.log(weakMap2.get(key1));    //{name: "Kate"}
console.log(weakMap2.get(key2));    //{name: "Sam"}


//-----------------------------------------------Получение элементов----------------------------------------------------
// Для получения объектов по ключу из WeakMap применяется метод get():
weakMap2 = new WeakMap([[key1, value1], [key2, value2]]);
console.log(weakMap2.get(key1));    // {name: "Tom"}


//--------------------------------------------Проверка наличия элемента-------------------------------------------------
// Чтобы проверить наличие элемента по определенному ключу, применяется метод has(), который возвращает true при наличии
// элемента:
weakMap2 = new WeakMap([[key1, value1]]);
console.log(weakMap2.has(key1));    // true
console.log(weakMap2.has(key2));    // false


//------------------------------------------------Удаление элемента-----------------------------------------------------
// Для удаления элемента по ключу применяется метод delete():
weakMap2 = new WeakMap([[key1, value1], [key2, value2]]);
console.log(weakMap2.has(key1));    // true
weakMap2.delete(key1);
console.log(weakMap2.has(key1));    // false


//---------------------------------------------------Слабые ссылки------------------------------------------------------
let jsCode = {code: "js"},
  tsCode = {code: "ts"};
let js = {lang: "JavaScript"},
  ts = {lang: "TypeScript"};
const weakMap = new WeakMap([[jsCode, js], [tsCode, ts]]);

jsCode = null;

console.log(weakMap);   // WeakMap {{code: "js"} => {lang: "JavaScript"}, {code: "ts"} => {lang: "TypeScript"}}
console.log("Некоторая работа");
const timerId = setTimeout(function(){
  console.log(weakMap);   // WeakMap {{code: "ts"} => {lang: "TypeScript"}}
  clearTimeout(timerId);
}, 10000);
// В данном случае сначала объект WeakMap хранит ссылки на два элемента с ключами jsCode и tsCode. Далее для переменной
// jsCode устанавливается значение null.
// Это приведет к тому, что спустя некоторое время начальное значение этой переменной будет удалено сборщиком мусора JavaScript.
//
// Причем если сразу после этого мы посмотрим на содержимое weakMap, то увидим, что объект с ключом jsCode в нем еще
// присутствует. Однако спустя некоторое время ссылка будет удалена из weakSet. Для эмуляции прошествия времени здесь
// используется функция setTimeout, которая выводит на консоль содержимое weakSet через 10000 секунд (конкретный период
// времени, через который сборщик мусора удалит значение, может отличаться).

