//---Методы массивов---

//---Методы сортирующие массив------------------------------------------------------------------------------------------

// Метод sort() сортирует массив в алфавитном порядке.
const arrFruits = ["Banana", "Orange", "Apple", "Mango"];
console.group("Метод sort()")
console.log("метод sort() сортирует массив в алфавитном порядке:");
console.log("Массив до сортировки " + arrFruits.toString());

arrFruits.sort();

console.log("Массив после сортировки " + arrFruits.toString());
console.log("");

// При использования метода sort() элементы массива преобразуются в строки поэтому для сортировки числового массива в
// качестве аргумента передается функция сравнения.
const arrNumToSortAsc = [-10,-100,11,1984,55,13];
const arrNumToSortDesc = [-10,-100,11,1984,55,13];
console.log("сортировка по возрастанию:");
console.log("Массив до сортировки " + arrNumToSortAsc.toString());

arrNumToSortAsc.sort(function(a, b){return a - b}); // для сортировки по возрастанию

console.log("Массив после сортировки " + arrNumToSortAsc.toString());
console.log("");

console.log("сортировка по убыванию:");
console.log("Массив до сортировки " + arrNumToSortDesc.toString());

arrNumToSortDesc.sort(function(a, b){return b - a}); // для сортировки по убыванию

console.log("Массив после сортировки " + arrNumToSortDesc.toString());
console.groupEnd();

// Нахождения максимального и минимального значения массива возможно с использованием Math.max и Math.min
const arrNum = [-50, 55.5, 2005,66, 135];
console.group("Нахождение максимального и минимального элемента массива");
console.log("Максимальный элемент");
console.log("Исходный массив: " + arrNum.toString());

const max = Math.max.apply(null,arrNum);
const min = Math.min.apply(null,arrNum);

console.log("Максимальное значение: " + max);
console.log("Минимальное значение: " + min);
console.groupEnd();

// Методом sort() также можно сортировать массив объектов, для этого в качестве аргумента нужно передать компаратор, где
// будет описано по какому свойсту нужно сортировать объекты.
const arrDogs = [
    {name: "Magnus", birthYear: 2020, breed: "Sheperd"},
    {name: "Corax", birthYear: 2018, breed: "Doberman"},
    {name: "Lorgar", birthYear: 2021, breed: "Retriver"}
]
console.group("Сортировка объектов в массиве");

console.log("Сортировка по году рождения");

console.log("Исходный массив: ");
for (let arrDog of arrDogs) {
    console.log(arrDog.name + " birthYear: " + arrDog.birthYear + " breed: " + arrDog.breed);
}

arrDogs.sort(function (a,b) {return a.birthYear - b.birthYear});
console.log("");
console.log("Отсортированный массив: ");
for (let arrDog of arrDogs) {
    console.log(arrDog.name + " birthYear: " + arrDog.birthYear + " breed: " + arrDog.breed);
}

console.log("");
console.log("Сортировка по имени");

console.log("Исходный массив: ");
for (let arrDog of arrDogs) {
    console.log(arrDog.name + " birthYear: " + arrDog.birthYear + " breed: " + arrDog.breed);
}

arrDogs.sort(function (a,b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();

    if (x < y) {
        return -1
    }
    else if (x > y) {
        return 1
    }
    else {
        return 0;
    }
});
console.log("");
console.log("Отсортированный массив: ");
for (let arrDog of arrDogs) {
    console.log(arrDog.name + " birthYear: " + arrDog.birthYear + " breed: " + arrDog.breed);
}
console.groupEnd();

