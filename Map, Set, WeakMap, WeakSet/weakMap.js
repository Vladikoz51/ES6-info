// это мапа в качестве ключей у которой могут выступать только объекты
// у weakMap есть только методы get, set, delete, has, свойство size недоступно
let obj1= {name: 'Vladimir'};
let obj2= {name: 'Aliya'};
let obj3= {name: 'Darya'};

const weakMap = new WeakMap();
// weakMap.set('one', 1); // выдаст ошибку
weakMap.set(obj1, 'father').set(obj2, 'mother').set(obj3, 'daughter'); // добавим элементы
obj1 = null;
console.log(weakMap);
