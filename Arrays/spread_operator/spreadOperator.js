// spread-оператор (оператор ...) позволяет разложить массив на отдельные значения. Для этого перед массивом ставится
// многоточие:
// ...массив
let users = ["Tom", "Sam", "Bob"];
console.log(...users);  // Tom Sam Bob

//------------------------------------------------Копирование массива---------------------------------------------------
// И, применяя этот оператор, мы можем наполнить один массив значениями из другого массива:
let people1 = [...users];
let people2 = new Array(...users);
let people3 = Array.of(...users);
console.log(people1);     //  ["Tom", "Sam", "Bob"]
console.log(people2);     //  ["Tom", "Sam", "Bob"]
console.log(people3);     //  ["Tom", "Sam", "Bob"]

// Однако что будет, если мы скопируем массив объектов:
let people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
let employees = [...people];
employees[0].name = "Dan";
console.log(employees);     //  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
console.log(people);        //  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
// Теперь массив people предоставляет массив объектов, где каждый объект имеет одно свойство - name. Далее мы изменяем
// значение свойства name у первого элемента.
// И консольный вывод нам покажет, что изменение одного массива привело к изменению второго массива. Поскольку объекты
// представляют ссылочный тип, и при копировании в новый массив передается не копия объекта (как в случае со строками),
// а сам объект. Поэтому первый элемент одного массива и первый элемент второго массива фактически будет представлять
// один и тот же объект.

// Однако мы можем полностью заменить элемент одного массива на другой объект, и тогда элемент второго массива не будет
// хранить ссылку на старый объект и не будет зависеть от первого массива:
people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
employees = [...people];
employees[0] = {name: "Dan"};
console.log(employees);     //  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
console.log(people);        //  [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}]

//--------------------------------------------Объединение массивов------------------------------------------------------
// С помощью spread-оператора можно при создания нового массива передать ему значения сразу нескольких массивов.
// Например:
let men = ["Tom", "Sam", "Bob"];
let women = ["Kate", "Alice", "Mary"];
people = [...men, "Alex", ...women];
console.log(people);     //  ["Tom", "Sam", "Bob", "Alex", "Kate", "Alice", "Mary"]


//------------------------------------------Передача аргументов функции-------------------------------------------------
// Подобным образом можно передавать из массива значения параметрам функции:
people = ["Tom", "Sam", "Bob"];

function print(first, second, third) {
  console.log(first);
  console.log(second);
  console.log(third);
}
print(...people);

// Если количество параметров функции меньше количества элементов массива, то оставшиеся элементы массива просто будут
// отброшены. Если количество параметров больше количества элементов массива, то параметры, которым не досталось
// значений, получат значение undefined:
people1 = ["Tom", "Sam", "Bob", "Mike"];
people2 = ["Alex", "Bill"];
function print2(first, second, third){
  console.log(`${first}, ${second}, ${third}`);
}
print2(...people1);  // Tom, Sam, Bob
print2(...people2);  // Alex, Bill, undefined
