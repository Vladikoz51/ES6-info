// Для преобразования строки в число применяется функция parseInt():
let number1 = "46";
let number2 = "4";
let result = parseInt(number1) + parseInt(number2);
console.log(result); // 50
// При этом строка может иметь смешанное содержимое, например, "123hello", то есть в данном случае есть цифры, но есть и
// обычные символы. Но метод parseInt() все равно попытается выполнить преобразование:
 num1 = "123hello";
 num2 = parseInt(num1);
console.log(num2); // 123
// Если методу не удастся выполнить преобразование, то он возвращает значение NaN (Not a Number), которое говорит о том,
// что строка не представляет число и не может быть преобразована.
console.log(parseInt("abc"));   // NaN
 type = typeof NaN;
console.log(type);              // number

// Для преобразования строк в дробные числа применяется функция parseFloat():
number1 = "46.07";
number2 = "4.98";
result = parseFloat(number1) + parseFloat(number2);
console.log(result); //51.05

// С помощью специальной функции isNaN() можно проверить, представляет ли строка число. Если строка не является числом,
// то функция возвращает true, если это число - то false:
num1 = "javascript";
num2 = "22";
result = isNaN(num1);
console.log(result); // true - num1 не является числом

result = isNaN(num2);
console.log(result); //  false - num2 - это число