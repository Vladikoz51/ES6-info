//----------------------------------------------Конструкция if..else----------------------------------------------------
// Конструкция if..else проверяет некоторое условие и если это условие верно, то выполняет некоторые действия.
// Простейшая форма конструкции if..else:
// if(условие) {
//  некоторые действия
// }
let income = 100;
if (income > 50) {
  console.log("доход больше 50");
}

// Конструкция if позволяет проверить наличие значения. Например:
let myVar = 89;
if(myVar){
  console.log(`Переменная myVar имеет значение: ${myVar}`);
}
// Если переменная myVar имеет значение, как в данном случае, то в условной конструкции она возвратит значение true.

let myVar2;
if(myVar2){
  console.log(`Переменная myVar имеет значение: ${myVar2}`);
}
// Здесь переменная myVar не имеет значения. (В реальности она равна undefined) Поэтому условие в конструкции if
// возвратит false, и действия в блоке конструкции if не будут выполняться.

// Но нередко для проверки значения переменной используют альтернативный вариант - проверяют на значение undefined и
// null:
if (myVar !== undefined && myVar !== null) {
  console.log(`Переменная myVar имеет значение: ${myVar}`);
}

// Выше мы рассмотрели, как определить действия, которые выполняются, если условие после if истинно. Но что, если мы
// хотим также выполнять еще один набор инструкций, если условие ложно? В этом случае можно использовать блок else.
// Данный блок содержит инструкции, которые выполняются, если условие после if ложно, то есть равно false:
// if(условие){
//     действия, если условие истинно
// }
// else {
//     действия, если условие ложно
// }
if (income > 50) {
  console.log("Доход больше 50");
}
else if (income === 50) {
  console.log("Доход равен 50");
}
else {
  console.log("Доход меньше 50");
}

// С помощью конструкции else if мы можем добавить альтернативное условие к блоку if. Например, выше в условие значение
// income может быть больше определенном значению может быть меньше, а может быть равно ему. Отразим это в коде:
income = 50;
if (income > 50) {
  console.log("Доход больше 50");
}
else if (income === 50){
  console.log("Доход равен 50");
}
else{
  console.log("Доход меньше 50");
}


//-------------------------------------------------------True или false-------------------------------------------------
// В javascript любая переменная может применяться в условных выражениях, но не любая переменная представляет тип
// boolean. И в этой связи возникает вопрос, что возвратит та или иная переменная - true или false? Много зависит от
// типа данных, который представляет переменная:
// undefined
// Возвращает false

// null
// Возвращает false

// Boolean
// Если константа/переменная равна false, то возвращается false. Соответствено если константа/переменная равна true,
// то возвращается true

// Number
// Возвращает false, если число равно 0 или NaN (Not a Number), в остальных случаях возвращается true
// Например, следующая переменная будет возращать false:
x = NaN;
if (x) {  // false
}

// String
// Возвращает false, если константа/переменная равна пустой строке, то есть ее длина равна 0, в остальных случаях
// возвращается true
const emptyText = "";   // false - так как пустая строка
const someText = "javascript";  // true - строка не пустая

// Object
// Всегда возвращает true
const user = {name:"Tom"};  // true
const car = {}; // true


//-----------------------------------------------Конструкция switch..case-----------------------------------------------
// Конструкция switch..case является альтернативой использованию конструкции if..else и также позволяет обработать сразу
// несколько условий:
income = 300;
switch (income) {
  case 100 :
    console.log("Доход равен 100");
    break;
  case 200 :
    console.log("Доход равен 200");
    break;
  case 300 :
    console.log("Доход равен 300");
    break;
}
// После ключевого слова switch в скобках идет сравниваемое выражение. Значение этого выражения последовательно
// сравнивается со значениями, помещенными после оператора сase. И если совпадение будет найдено, то будет выполняться
// определенный блок сase.
// В конце каждого блока сase ставится оператор break, чтобы избежать выполнения других блоков.
income = 200;
switch (income) {
  case 100 :
  case 200 :
    console.log("Доход равен 100 или 200");
    break;
  case 300 :
    console.log("Доход равен 300");
    break;
}
// В данном случае для условия, когда income равно 100 и 200, выполняются одни и те же действия.

// Если мы хотим также обработать ситуацию, когда совпадения не будет найдено, то можно добавить необязательный блок
// default:
income = 300;
switch (income) {
  case 100 :
    console.log("Доход равен 100");
    break;
  case 200 :
    console.log("Доход равен 200");
    break;
  case 300 :
    console.log("Доход равен 300");
    break;
  default:
    console.log("Доход неизвестной величины");
    break;
}