//---Операторы rest/spread---

const boys = ["Vova", "Dima", "Misha"];
const girls = ["Dasha", "Tanya", "Anya"];

//---spread-------------------------------------------------------------------------------------------------------------

console.group("Spread");
//---Работа с массивами----------------------------------
console.group("Работа с массивами");

// spread позволяет "развернуть" массив, пишется в виде ...
console.group("Spread intro");
console.log("Массив boys выведенный обычным способом:");
console.log(boys);
console.log("Элементы boys, записанные в console.log через запятую:");
console.log("Vova", "Dima", "Misha");
console.log("Массив boys выведенный при помощи spread: ");
console.log(...boys);
console.groupEnd()

// spread позволяет копировать массив

const boys2 = [...boys];

console.group("Копирование массива при помощи spread");
console.log("Оригинальный массив:")
console.log(boys);
console.log("Скопированный массив:")
console.log(boys2);
console.groupEnd();

// spread позволяет объединять несколько массивов и элементов  в один массив

const boysAndGirlsAndYasmina = [...boys, ...girls, "Yasmina"];

console.group("Объединение нескольких массивов  и элементов в один массив при помощи spread");
console.log("Массив boys:")
console.log(boys);
console.log("Массив girls:")
console.log(girls);
console.log("Строка: 'Yasmina'");
console.log("Массив boysAndGirlsAndYasmina:")
console.log(boysAndGirlsAndYasmina);
console.groupEnd();
console.groupEnd();

//---Работа с объектами----------------------------------
console.group("Работа с объектами");
const boysWithAge ={vova: 33, dima: 25, misha: 27};
const girlsWithAge ={dasha: 33, anya: 25, tanya: 27};

// spread позволяет копировать объект

const boysWithAge2 = {...boysWithAge};

console.group("Копирование объекта при помощи spread");
console.log("Оригинальный объект:")
console.log(boysWithAge);
console.log("Скопированный массив:")
console.log(boysWithAge2);
console.groupEnd();

// spread позволяет объединять несколько объектов в один объект

const boysAndGirlsWithAge = {...boysWithAge, ...girlsWithAge};
// если у соединяемых объектов есть одинаковые свойства то у конечного объекта будет свойство того объекта который
// передан аргументом позже (т.е свойство объекта girlsWithAge)

console.group("Объединение нескольких объектов в один объект при помощи spread");
console.log("Объект boysWithAge:")
console.log(boysWithAge);
console.log("Объект girlsWithAge:")
console.log(girlsWithAge);
console.log("Массив boysAndGirlsWithAge:")
console.log(boysAndGirlsWithAge);
console.groupEnd();
console.groupEnd()

// Практическое применение spread
console.group("Практическое применение");
// получена коллекция элементов div
let divs = document.querySelectorAll("div");
console.log("NodeList, полученный при помощи querySelectorAll");
console.log(divs);
console.log("Преобразование в массив при помощи spread");
divs = [...divs];
console.log(divs);
console.groupEnd();

console.groupEnd()

//---rest-------------------------------------------------------------------------------------------------------------

console.group("Rest");

console.group("Деструктуризация массива")
// rest позволяет сохранять остаток массива в отдельную переменную
const arrRest = [1,2,3,4,5,6,7,8,9,10];
//Допустим есть массив и мы хотим первые пять элементов сохранить по отдельности в переменные, а оставшиеся пять в
// массив. Мы можем это сделать следующим способом.

const [a, b, c, d, e, ...arr] = arrRest;

console.log("Исходный массив:");
console.log(arrRest);
console.log("Отдельные переменные и остаточный массив:")
console.log(a, b, c, d, e, arr);
console.groupEnd();

console.group("Деструктуризация объекта")
// rest позволяет сохранять остаток массива в отдельную переменную
const objRest = {
    name: "Vladimir",
    age: 33,
    sex: "male",
    city: "Ufa"
}
//Допустим есть объект и мы хотим первые два свойства объекта сохранить по отдельности в переменные, а оставшиеся
// свойства в отдельный объект. Мы можем это сделать следующим способом.

const {name, age, ...other} = objRest;

console.log("Исходный объект:");
console.log(objRest);
console.log("Отдельные переменные и остаточный объект:")
console.log(name, age, other);
console.groupEnd();


console.groupEnd();
