//---------------Set----------------------------------------------------------------------------------------------------
// Сэт это коллекция уникальных значений (т.е повторяющихся значений быть не может), значением могут быть данные любого
// типа

const set = new Set();

//---метод add---
set.add("Vladimir"); // добавляет новый элемент
set.add(3);
set.add(new Date());
set.add({firstName: 'Ivan', lastName: 'Ivanov'});
set.add('Vladimir');
console.log(set);

//---метод clear---
//аналогично map удаляет все элементы из сэта
set.clear();
console.log(set.size); // свойство size хранит количество элементов
set.add("Vladimir"); // добавляет новый элемент
set.add(3);
set.add(new Date());
set.add({firstName: 'Ivan', lastName: 'Ivanov'});
set.add('Vladimir');

//---метод has---
// показывает есть данное значение в сете
console.log(set.has('Vladimir'));
console.log(set.has(4));

//---метод delete---
//удаляет элемент
set.delete(3); // с объектами не работает почему то
console.log(set);

//--Итерирование сэта----------------------------------------------------------------
// 1. С помощью for of
for (let elem of set) {
    console.log(elem);
}

// с помощью оператора spread можно трансформировать сет в массив
const arr = [...set];
console.log(arr);

// 2. С помощью forEach
set.forEach((elem) => console.log(elem));
