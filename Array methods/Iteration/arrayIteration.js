//---Методы массивов---

//---Методы перебирающие массив-----------------------------------------------------------------------------------------

// метод forEach() вызывает колбэк функцию для каждого элемента массива:
const arrForEach = [33,68,-10,15,115];
let txt = "";
console.group("Метод forEach");
console.log("Исходный массив: " + arrForEach.toString());

// у колбэк функции есть параметры: value (значение элемента массива), index (индекс элемента массива),
// array (сам массив)
arrForEach.forEach(function (value, index, array) {
    txt += `У элемента с индексом ${index} значение ${value}\n`
})

console.log("Строка как результат работы метода forEach():")
console.log(txt);
console.groupEnd();

// метод map() вызывает колбэк функцию для каждого элемента массива и сохраняет результат работы в новый массив :
const arrMap = [0.5,1.5,2.5,3.5];
console.group("Метод map");
console.log("Исходный массив: " + arrMap.toString());

// у колбэк функции есть параметры: value (значение элемента массива), index (индекс элемента массива),
// array (сам массив)
const newArrMap = arrMap.map(function (value, index, array) {
    return value * 2;
})

console.log("Новый массив как результат работы метода map(): " + newArrMap.toString())
console.groupEnd();

// метод filter() вызывает колбэк функцию для каждого элемента массива и сохраняет в новый массив только элементы
// удовлетворяющие заданному условию:
const arrFilter = [50,-10,1,-5,123,-0.5,18];
console.group("Метод filter");
console.log("Исходный массив: " + arrFilter.toString());

// у колбэк функции есть параметры: value (значение элемента массива), index (индекс элемента массива),
// array (сам массив)
const newArrFilter = arrFilter.filter(function (value, index, array) {
    return value > 0;
})

console.log("Новый массив как результат работы метода map(): " + newArrFilter.toString())
console.groupEnd();

// метод reduce() вызывает колбэк функцию для каждого элемента массива и сохраняет суммарное значение в переменную:
const arrReduce = [10,20,30,40,-50,20];
console.group("Метод reduce");
console.log("Исходный массив: " + arrReduce.toString());

// у колбэк функции есть параметры: total (начальное значение / значение которае вернул предыдущий колбэк),
// value (значение элемента массива), index (индекс элемента массива),array (сам массив)
let sum = arrReduce.reduce(function (total, value,index, array) {
    return total + value;
});
// Метод reduce() также может принимать начальное значение
// let sum2 = arrReduce.reduce(function (total, value,index, array) {
//     return total + value;
// }, -70);

console.log("Сумма всех элементов массива как результат работы метода reduce(): " + sum);
console.groupEnd();

// метод every() проверяет соответствуют ли все элементы массива заданному условию:
const arrEvery = [50,-10,1,-5,123,-0.5,18];
console.group("Метод every");
console.log("Исходный массив: " + arrEvery.toString());

// у колбэк функции есть параметры: value (значение элемента массива), index (индекс элемента массива),
// array (сам массив)
let isPositiveOnly = arrEvery.every(function (value, index, array) {
    return value > 0;
});

console.log("В массиве только положительные числа: " + isPositiveOnly);
console.groupEnd();

// метод some() проверяет соответствуют ли хотя бы один элемент массива заданному условию:
const arrSome = [50,1,-5,123,18];
console.group("Метод some");
console.log("Исходный массив: " + arrSome.toString());

// у колбэк функции есть параметры: value (значение элемента массива), index (индекс элемента массива),
// array (сам массив)
let isHaveNegative = arrSome.some(function (value, index, array) {
    return value < 0;
});

console.log("В массиве есть хотя бы одно отрицательное число: " + isHaveNegative);
console.groupEnd();

// метод indexOf() ищет заданное значение элемента массива, если находит то возвращает его индекс, если не находит то
// возвращает -1:
const arrIndexOf = ["Apple", "Banana", "Orange"];
console.group("Метод indexOf");
console.log("Исходный массив: " + arrIndexOf.toString());

let indexOrange = arrIndexOf.indexOf("Orange");

console.log("Индекс элемента Orange: " + indexOrange);
let indexKiwi = arrIndexOf.indexOf("Kiwi");
console.log("Индекс элемента Kiwi: " + indexKiwi);
console.groupEnd();

// метод lastIndexOf() ищет последнее заданное значение элемента массива, если находит то возвращает его индекс, если не
// находит то возвращает -1:
const arrLastIndexOf = ["Apple", "Banana", "Orange", "Apple"];
console.group("Метод lastIndexOf");
console.log("Исходный массив: " + arrLastIndexOf.toString());

let indexApple = arrLastIndexOf.lastIndexOf("Apple");

console.log("Индекс элемента Apple: " + indexApple);
let indexPotato = arrLastIndexOf.indexOf("Potato");
console.log("Индекс элемента Kiwi: " + indexPotato);
console.groupEnd();

// метод includes() проверяет есть ли у массива данный элемент, возвращает булево значение
const arrIncludes = ["Bob", "John", "Sarah", "Jenny"];
console.group("Метод includes");
console.log("Исходный массив: " + arrIncludes.toString());

let isIncludesSarah = arrIncludes.includes("Sarah");
console.log("Есть ли в массиве элемент Sarah: " + isIncludesSarah);
let isIncludesThomas = arrIncludes.includes("Thomas");
console.log("Есть ли в массиве элемент Thomas: " + isIncludesThomas);
console.groupEnd();

// метод find() возвращает значение первого элемента массива который соответствует заданному условию, если значение не
// будет найдено вернет undefined
const arrFind = [50,1,-5,123,18, -10];
console.group("Метод find");
console.log("Исходный массив: " + arrFind.toString());

// у колбэк функции есть параметры: value (значение элемента массива), index (индекс элемента массива),
// array (сам массив)
let firstNegative = arrFind.find(function (value, index, array) {
    return value <  0;
});

console.log("Первое отрицательное число в массиве: " + firstNegative);
console.groupEnd();

// метод findIndex() возвращает индекс первого элемента массива который соответствует заданному условию, если значение
// не будет найдено то вернет -1
const arrFindIndex = [50,1,-5,123,18, -10];
console.group("Метод findIndex");
console.log("Исходный массив: " + arrFindIndex.toString());

// у колбэк функции есть параметры: value (значение элемента массива), index (индекс элемента массива),
// array (сам массив)
let firstNegativeIndex = arrFindIndex.findIndex(function (value, index, array) {
    return value < 0;
});

console.log(" Индекс первого отрицательного числа в массиве: " + firstNegativeIndex);
console.groupEnd();

// метод from() возвращает массив созданный из любого перебираемого объекта или у которого есть свойство length
const arrFrom = Array.from("Сподвыподвертом");
console.group("Метод from");
console.log("Исходная строка: " + "Сподвыподвертом");
console.log("Массив из строки: " + arrFrom.toString());
console.groupEnd();

// метод keys() возвращает объект Итератор c индексами данного массива
const arrKeys = ["One", "Two", "Three", "Four", "Five"];
console.group("Метод keys");
console.log("Исходный массив: " + arrKeys.toString());
for (const arrKey of arrKeys.keys()) {
    console.log(arrKey);
}
console.groupEnd();