// Деструктуризация это разложение какой-то структуры на ее составляющие.

// Допустим есть функция которая возвращает массив

const calc = (a,b) => {
    return [a + b, a - b]
};

// Если мы хотим сохранить каждый элемент массива в отдельную переменную мы может сделать это при помощи деструктуризации
const arrDest = calc(50, 30);

const [x1,y1] = arrDest;

console.group("Деструктуризация массива")
console.log(`Исходный массив: ${arrDest.toString()}`);
console.log(`Переменная x1: ${x1}`);
console.log(`Переменная y1: ${y1}`);
console.log(``);

// Создадим другую функцию calc2
const calc2 = (a,b) => {
  return [a + b, a - b, a * b, a / b];
}
const arrDest2 = calc2(80, 40);
// Если мы хотим сохранить в переменные только 2 и 4 элемент массива, то можно это сделать следующим способом

const [ , x2, , y2] = arrDest2;

console.log(`Исходный массив: ${arrDest2.toString()}`);
console.log(`Переменная x2: ${x2}`);
console.log(`Переменная y2: ${y2}`);
console.log(``);

// Если мы хотим сохранить в переменные только 1 и 2 элемент массива, то остаток можно сохранить в массив при помощи
// оператора rest
const arrDest3 = calc2(100, 50);

const [x3, y3, ...other3] = arrDest3;

console.log(`Исходный массив: ${arrDest3.toString()}`);
console.log(`Переменная x3: ${x3}`);
console.log(`Переменная y3: ${y3}`);
console.log(`Массив other: ${other3.toString()}`);
console.log(``);

// При деструктуризации можно выставлять значение по умолчанию, делается это следующим образом, допустим есть функция
// которая возвращает массив, один из элементов которого равен undefined

const calc4 = (a,b) => {
    return [a + b, a - b, undefined, a / b];
}

const arrDest4 = calc4(88, 12);
const arrDest5 = calc2(88, 12);

const [x4, y4, z4 = "Нет умножения", ...other4] = arrDest4;
const [x5, y5, z5 = "Нет умножения", ...other5] = arrDest5;

console.log(`Исходный массив:`);
console.log(arrDest4);
console.log(`Переменная x4: ${x4}`);
console.log(`Переменная y4: ${y4}`);
// Так как первоначальное значение элемента массива под индексом 2 undefined то берется значение по умолчанию
console.log(`Переменная z4: ${z4}`);
console.log(`Массив other: ${other4.toString()}`);
console.log(``);
console.log(`Переменная x5: ${x5}`);
console.log(`Переменная y5: ${y5}`);
// Так как первоначальное значение элемента массива под индексом 2 НЕ undefined то значение по умолчанию НЕ БЕРЕТСЯ
console.log(`Переменная z5: ${z5}`);
console.log(`Массив other: ${other5.toString()}`);
console.log(``);
console.groupEnd();


//---Деструктуризация объекта----------------------------------------------------------------------------------------

console.group("Деструктуризация объекта");
const person = {
    name: "Vladimir",
    age: 33,
    address: {
        country: "Russia",
        city: "Ufa",
    }
}
// Деструктуризация объекта проводится следующим образом

// Имя переменной должно совпадать с именем свойства объекта, иначе значение переменной будет undefined
const {name, age, address} = person;

console.log(`Исходный объект`);
console.log(person);
console.log(`Переменная name: ${name}`);
console.log(`Переменная age: ${age}`);
console.log(`Переменная address`);
console.log(address);
console.log("");

// Для переменных со значением undefined можно задать значение по умолчанию
const person2 = {
    name2: "Aliya",
    age2: 34,
    address2: {
        country2: "Russia",
        city2: "Ufa",
    }
}
const {name2, age2, car2 = "Renault Sandero", address2} = person2;

console.log(`Исходный объект`);
console.log(person2);
console.log(`Переменная name2: ${name2}`);
console.log(`Переменная age2: ${age2}`);
console.log(`Переменная car2: ${car2}`);
console.log(`Переменная address2`);
console.log(address2);
console.log("");


// Переменным при деструктуризации можно задать имя отличное от свойства объекта
const person3 = {
    name: "Darya",
    age: 1.5,
    address: {
        country: "Russia",
        city: "Ufa",
    }
}
const {name: daryaName, age: daryaAge, address: daryaAddress, daryaCar = "Нет машины"} = person3;

console.log(`Исходный объект`);
console.log(person3);
console.log(`Переменная daryaName: ${daryaName}`);
console.log(`Переменная age2: ${daryaAge}`);
console.log(`Переменная car2: ${daryaCar}`);
console.log(`Переменная address2`);
console.log(daryaAddress);
console.log("");

// Переменным полученным при деструктуризации также можно проводить деструктуризацию
const person4 = {
    name: "Bob",
    age: 25,
    address: {
        country: "USA",
        city: "Los Angeles",
    }
}
const {name: bobName, age: bobAge, address: {country: bobCountry, city: bobCity}, bobCar = "Chevy Impala"} = person4;

console.log(`Исходный объект`);
console.log(person4);
console.log(`Переменная name2: ${bobName}`);
console.log(`Переменная age2: ${bobAge}`);
console.log(`Переменная car2: ${bobCar}`);
console.log(`Bos is living in ${bobCity}, ${bobCountry}`);
console.log("");


// При деструктуризации объекта можно использовать оператор rest:
const person5 = {
    name: "Iohan",
    age: 48,
    address: {
        country: "Norway",
        city: "Oslo",
    }
}

const {name: objName, ...objInfo} = person5;

console.log(`Исходный объект`);
console.log(person5);
console.log(`Переменная objName: ${objName}`);
console.log(`Объект objInfo`);
console.log(objInfo);
console.log("");
// Использование деструктуризации при объявлении функции:

function  logPerson({name: firstName = "Guest", age}) {
    console.log(`${firstName} ${age}`);
}

const person6 = {
    name: "Isaak",
    age: 60,
    address: {
        country: "Tel Aviv",
        city: "Israel",
    }
}
// Теперь при вызове функции, переданный в качестве аргумента объект деструктуризируется и полученные переменные можно
// использовать в теле функции
logPerson(person6);
console.groupEnd();