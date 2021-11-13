// Объект WeakSet во многом похож на обычное множество. Он также может хранить только уникальные значения, но каждый его
// элемент должен представлять объект.
// Для создания объекта WeakSet используется его конструктор, в который можно передать начальные значения:
// пустой WeakSet
const weakSet1 = new WeakSet();
// инициализация начальными значениями
const weakSet2 = new WeakSet([{name:"Tom", age: 37}, {name:"Alice", age: 34}]);
// Для инициализации как в случае с объектом Set в конструктор передается массив, но данный массив содержит именно
// объекты, а не скалярные значения, типа чисел или строк.


//----------------------------------------------Добавление элементов----------------------------------------------------
// Для добавления данных в WeakSet применяется метод add():
let weakSet = new WeakSet();
weakSet.add({lang: "JavaScript"});
weakSet.add({lang: "TypeScript"});
// weakSet.add(34); // так нельзя - 34 - число, а не объект
console.log(weakSet);   // {{lang: "JavaScript"}, {lang: "TypeScript"}}
// Причем опять же добавить мы можем только объект, а не скалярные значения типа чисел или строк.


//------------------------------------------------Удаление элементов----------------------------------------------------
// Для удаления применяется метод delete(), в который передается ссылка на удаляемый объект:
weakSet = new WeakSet();
let js = {lang: "JavaScript"};
let ts = {lang: "TypeScript"};
weakSet.add(js);
weakSet.add(ts);
weakSet.delete(js);
console.log(weakSet);   // {{lang: "TypeScript"}}


//------------------------------------------------Проверка наличия элементов--------------------------------------------
// Если надо проверить, имеется ли объект в WeakSet, то можно использовать метод has(), который возвращает true при
// наличии объекта:
const java = {lang: "Java"};
weakSet = new WeakSet([js, ts]);
console.log(weakSet.has(ts));       // true
console.log(weakSet.has(java));     //  false


//-------------------------------------------------Перебор WeakSet------------------------------------------------------
// Стоит отметить, что WeakSet не поддерживает перебор ни с помощью метода ForEach, которого у WeakSet нет, ни с помощью
// цикла for. Например. если мы попробуем перебрать WeakSet через цикл for..of:
weakSet = new WeakSet([
  {lang: "JavaScript"},
  {lang: "TypeScript"},
  {lang: "Java"}
]);
// for (item of weakSet) {
//   console.log(item);
// }
// Uncaught TypeError: weakSet is not iterable


//----------------------------------------------------Слабые ссылки-----------------------------------------------------
// Объекты передаются в WeakSet по ссылке. И когда объект перестает существовать в силу различных причин, он удаляется
// из WeakSet. Так, рассмотрим следующий пример:
weakSet = new WeakSet([js, ts]);
js = null;
console.log(weakSet);   // {{lang: "JavaScript"}, {lang: "TypeScript"}}
console.log("Некоторая работа");
const timerId = setTimeout(function(){
  console.log(weakSet);   // {{lang: "TypeScript"}}
  clearTimeout(timerId);
}, 30000);