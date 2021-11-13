//---------------------------------------------Проверка наличия свойств и методов---------------------------------------
// При динамическом определении в объекте новых свойств и методов перед их использованием бывает важно проверить, а есть
// ли уже такие методы и свойства. Для этого в javascript может использоваться оператор in. Он имеет следующий
// синтаксис:
// "свойство|метод" in объект
// в кавычках идет название свойства или метода, а после in - название объекта. Если свойство или метод с подобным
// именем имеется, то оператор возвращает true. Если нет - то возвращается false.
// Например, узнаем, есть ли в объекте ряд свойств:
const user = {};
user.name = "Tom";
user.age = 26;
user.print = function() {
  console.log(this.name);
  console.log(this.age);
};
let hasNameProp = "name" in user;
console.log(hasNameProp); // true - свойство name есть в user
let hasWeightProp = "weight" in user;
console.log(hasWeightProp); // false - в user нет свойства или метода под названием weight
// Подобным образом можно проверить и наличие методов:
let hasPrintMethod = "print" in user;
console.log(hasPrintMethod); // true - в user есть метод print

// Альтернативный способ заключается в проверке на значение undefined. Если свойство или метод равен undefined, то эти
// свойство или метод не определены:
hasNameProp = user.name !== undefined;
console.log(hasNameProp); // true
hasWeightProp = user.weight !== undefined;
console.log(hasWeightProp); // false

// И так как объекты представляют тип Object, а значит, имеет все его методы и свойства, то объекты также могут
// использовать метод hasOwnProperty(), который определен в типе Object:
hasNameProp = user.hasOwnProperty("name");
console.log(hasNameProp); // true
hasPrintMethod = user.hasOwnProperty("print");
console.log(hasPrintMethod); // true
hasWeightProp = user.hasOwnProperty("weight");
console.log(hasWeightProp); // false


//-----------------------------------------------Перебор свойств и методов----------------------------------------------
// С помощью цикла for мы можем перебрать объект как обычный массив и получить все его свойства и методы и их значения:
let tom = {
  name: "Tom",
  age: 26,
  print() {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
};

for (const prop in tom) {
  console.log(prop, " : ", tom[prop]);
}
// С помощью дополнительных функций Object.entries, Object.keys и Object,values можно получить все свойства (в том числе
// методы) объекта и их значения.

// Object.entries()
// Функция Object.entries() в качестве параметра принимает объект и возвращает массив пар "название_свойства - значение",
// где каждая пара свойство-значение представляет массив. Например:
tom = {
  name: "Tom",
  age: 26,
  print() {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
};
for (const prop of Object.entries(tom)) {
  console.log(prop);
}

// Object.keys()
// Функция Object.keys() позволяет получить массив названий всех свойств объекта. Например, возьмем определенный выше
// объект tom:
tom = {
  name: "Tom",
  age: 26,
  print() {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
};
console.log(Object.keys(tom)); // ["name", "age", "print"]
// Соответственно можно перебрать этот набор и получить значения свойств:
for (const prop of Object.keys(tom)) {
  const value = tom[prop];    // получаем по названию значение свойства
  console.log(prop,value);
}

// Object.values()
// Функция Object.values() возвращает массив, который содержит все значения свойств объекта:
tom = {
  name: "Tom",
  age: 26,
  print() {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
};
console.log(Object.values(tom)); // ["Tom", 26, print()]