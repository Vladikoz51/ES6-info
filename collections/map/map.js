// Map или карта (отображение, словарь) представляет структуру данных, где каждый элемент имеет ключ и значение. Ключи в
// рамках карты являются уникальными, то есть с одним ключом может быть сопоставлен только один элемент. Для создания
// карты применяется конструктор объекта Map:
let myMap = new Map();
// Также можно инициализировать карту начальными значениями. Для этого в конструктор передается массив, элементы
// которого представляют массивы из двух элементов - первый элемент будет выступать в качестве ключа, а второй - в
// качестве значения:
myMap = new Map([[1, "a"], [2, "b"], [3, "c"]]);
console.log(myMap);     // Map(3) {1 => "a", 2 => "b", 3 => "c"}
// В данном случае числа 1, 2, 3 являются ключами, а строки "a", "b", "c" - значениями.

// При этом ключи и значения необязательно должны быть одного типа:
myMap = new Map([["a", 1], [2, "b"], ["c", true]]);
console.log(myMap);     // Map(3) {"a" => 1, 2 => "b", "c" => true}

// С помощью свойства size можно проверить количество элементов в Map:
myMap = new Map([["a", 1], [2, "b"], ["c", true]]);
console.log(myMap.size);     // 3


//-----------------------------------------Добавление и изменение элементов---------------------------------------------
// Для установки значения применяется метод set():
myMap = new Map([[1, "a"], [2, "b"], [3, "c"]]);
myMap.set(4, "d");      // добавление элемента
myMap.set(2, "v");      // изменение элемента
console.log(myMap);     // Map(4) {1 => "a", 2 => "v", 3 => "c", 4 => "d"}
// Первый параметр метода set() представляет ключ, а второй параметр - значение элемента. Если по такому ключу нет
// элементов, то добавляется новый элемент. Если ключ уже есть, то уже имеющийся элемент изменяет свое значение.


//----------------------------------------------Получение элементов-----------------------------------------------------
// Для получения элемента по ключу применяется метод get(), в который передается ключ элемента:
myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
console.log(myMap.get(2));  // Bob
console.log(myMap.get(7));  // undefined
// Если map не содержит элемента по заданному ключу, то метод возвращает undefined.


//-------------------------------------------Проверка наличия элемента--------------------------------------------------
// Чтобы избежать возвращения undefined мы можем проверить наличие элемента по ключу с помощью метода has(). Если
// элемент по ключу имеется, то метод возвращает true, иначе возвращается false:
myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
console.log(myMap.has(2));  // true
console.log(myMap.has(7));  // false
if(myMap.has(1)) console.log(myMap.get(1)); // Tom


//----------------------------------------------Удаление элементов------------------------------------------------------
// Для удаления одного элемента по ключу применяется метод delete():
myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
myMap.delete(2);
console.log(myMap);     // Map(2) {1 => "Tom", 3 => "Sam"}

// Для удаления всех элементов используется метод clear():
myMap.clear();
console.log(myMap);     // Map(0) {}


//----------------------------------------------Перебор элементов-------------------------------------------------------
// Для перебора элементов используется метод forEach:
myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
myMap.forEach(function(value1, value2, map){
  console.log(value2, value1);
});
// Метод forEach в качестве параметра получает функцию обратного вызова, которая имеет три параметра. Первый и второй
// параметры - это соответственно значение и ключ текущего перебираемого элемента, а третий параметр - перебираемый
// объект Map.

// Также для перебора объекта Map можно использовать циклы, например, цикл for...of:
for (item of myMap){
  console.log(item[0], item[1]);
}
// Каждый элемент из Map помещается в переменную item, которая в свою очередь представляет массив. Первый элемент этого
// массива - ключ, а второй элемент - значение элемента.

// Также объект Map имеет два дополнительных метода: keys() позволяет перебрать только ключи и values() позволяет
// перебирать значения элементов. Оба метода возвращают итераторы, поэтому для перебора ключей и значений по отдельности
// также можно использовать цикл for...of:
myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
for(item of myMap.keys()) {
  console.log(item);
}
for(item of myMap.values()){
  console.log(item);
}
