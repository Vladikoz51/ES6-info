// Регулярные выражения используются для нахождения комбинации символов в строке.
// Для записи регулярного выражения используется два слэша с выражением между ними.
let str = 'Hello my neighbour!';
let regExp = /nei/; //

// например метод match будет искать первое совпадение с регулярным выражением и вернет массив с индексом начала
// совпадения
console.log(str.match(regExp)); //

// модификатор g говорит о том что будет осуществлен поиск всех совпадений с регулярным выражением
regExp = /nei/g;
str = 'Hello my neighbour nei!'
console.log(str.match(regExp));

// модификатор i говорит о том что совпадения нужно искать независимо от регистра
regExp = /nei/i;
str = 'Hello my Neighbour!'
console.log(str.match(regExp));

// модификатор m говорит о том что совпадения нужно с начала каждой строки, используется если текст состоим более чем из
// одной строки.
regExp = /nei/gim;
str = 'Hello my neighbour!\nHello my Reyegar!\nHello my Neimar!';
console.log(str.match(regExp));

// выражение [abc] ищет любой из символов между квадратных скобок
regExp = /[eo]/g
str = 'Hello my neighbour!';
console.log(str.match(regExp));

// выражение [^abc] ищет любой из символов кроме символов между квадратных скобок
regExp = /[^eo]/g
console.log(str.match(regExp));

// выражение [a-z] ищет любую букву в нижнем регистре, [A-Z] в верхнем регистре, [0-9] числа, [^0-9] не числа
regExp = /[a-z]/g;
console.log(str.match(regExp));
regExp = /[A-Z]/g;
console.log(str.match(regExp));

str = 'Hello my neighbour 666!';
regExp = /[0-9]/g;
console.log(str.match(regExp));

regExp = /[^0-9]/g;
console.log(str.match(regExp));

// выражение x|y ищет либо x либо y
str = 'Hello my neighbour';
regExp = /hello|neighbour/gi;
console.log(str.match(regExp));

// выражение . ищет любой символ за исключением
