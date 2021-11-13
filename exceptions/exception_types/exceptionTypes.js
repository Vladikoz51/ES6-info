// В блоке catch мы можем получить информацию об ошибке, которая представляет объект. Все ошибки, которые генерируются
// интерпретатором JavaScript, предоставляют объект типа Error, который имеет ряд свойств:
// message: сообщение об ошибке
// name: тип ошибки

// Стоит отметить, что отдельные браузеры поддерживают еще ряд свойств, но их поведение в зависимости от браузера может
// отличаться:
// fileName: название файла с кодом JavaScript, где произошла ошибка
// lineNumber: строка в файле, где произошла ошибка
// columnNumber: столбец в строке, где произошла ошибка
// stack: стек ошибки

// Получим данные ошибки, например, при вызове несуществующей функции:
try{
  callSomeFunc();
}
catch(error){
  console.log("Тип ошибки:", error.name);
  console.log("Ошибка:", error.message);
}


//----------------------------------------------------Типы ошибок-------------------------------------------------------
// Выше мы рассмотрели, что генерируемая интерпретатором ошибка представляет тип Error, однако при вызове несуществующей
// функции генерируется ошибка типа ReferenceError. Дело в том, что тип Error представляет общий тип ошибок. В то же
// время есть конкретные типы ошибок для определенных ситуаций:
// EvalError: представляет ошибку, которая генерируется при выполнении глобальной функции eval()
// RangeError: ошибка генерируется, если параметр или переменная, представляют число, которое находится вне некоторого
// допустимого диапазона
// ReferenceError: ошибка генерируется при обращении к несуществующей ссылке
// SyntaxError: представляет ошибку синтаксиса
// TypeError: ошибка генерируется, если значение переменной или параметра представляют некорректный тип или пр попытке
// изменить значение, которое нельзя изменять
// URIError: ошибка генерируется при передаче функциям encodeURI() и decodeURI() некорректных значений
// AggregateError: предоставляет ошибку, которая объединяет несколько возникших ошибок, например, при попытке присвоить
// константе второй раз значение, генерируется ошибка TypeError:
try {
  const num = 9;
  num = 7;
}
catch(error) {
  console.log(error.name);        // TypeError
  console.log(error.message);     // Assignment to constant variable.
}

// Сгенерируем несколько типов ошибок:
class Person {
  constructor(pName, pAge){
    const age = parseInt(pAge);
    if (isNaN(age)) {
      throw new TypeError("Возраст должен представлять число");
    }
    if (age < 0 || age > 120) {
      throw new RangeError("Возраст должен быть больше 0 и меньше 120");
    }
    this.name = pName;
    this.age = age;
  }
  print(){ console.log(`Name: ${this.name}  Age: ${this.age}`);}
}
// Проверим генерацию исключений:
try {
  const tom = new Person("Tom", -45);
}
catch(error) {
  console.log(error.message); // Возраст должен быть больше 0 и меньше 120
}
try {
  const bob = new Person("Bob", "bla bla");
}
catch(error) {
  console.log(error.message); // Возраст должен представлять число
}
try {
  const sam = new Person("Sam", 23);
  sam.print();    // Name: Sam  Age: 23
}
catch(error) {
  console.log(error.message);
}


//--------------------------------------------Обработка нескольких типов ошибок-----------------------------------------
// При выполнении одного и то же кода могут генерироваться ошибки разных типов. И иногда бывает необходимо разграничить
// обработку разных типов. В этом случае мы можем проверять тип возникшей ошибки. Например, пример выше с классом
// Person:
try {
  const tom = new Person("Tom", -45);
  const bob = new Person("Bob", "bla bla");
}
catch(error){
  if (error instanceof TypeError) {
    console.log("Некорректный тип данных.");
  } else if (error instanceof RangeError) {
    console.log("Недопустимое значение");
  }
  console.log(error.message);
}


//------------------------------------------------Создание своих типов ошибок-------------------------------------------
// Мы не ограничены встроенными только встроенными типами ошибок и при необходимости можем создавать свои типы ошибок,
// предназначенные для каких-то конкретных ситуаций. Например:
class PersonError extends Error {
  constructor(value, ...params) {
    // остальные параметры передаем в конструктор базового класса
    super(...params);
    // В конструкторе мы определяем дополнительное свойство - argument. Оно будет хранить значение, которое вызвало
    // ошибку. С помощью параметра value конструктора получаем это значение. Кроме того, переопределяем имя типа с
    // помощью свойства this.name.
    this.name = "PersonError";
    this.argument = value;
  }
}

class Person2{
  constructor(pName, pAge) {
    const age = parseInt(pAge);
    if (isNaN(age)) {
      throw new PersonError(pAge, "Возраст должен представлять число");
    }
    if (age < 0 || age > 120) {
      throw new PersonError(pAge, "Возраст должен быть больше 0 и меньше 120");
    }
    this.name = pName;
    this.age = age;
  }
  print() { console.log(`Name: ${this.name}  Age: ${this.age}`);}
}

try {
  //const tom = new Person("Tom", -45);
  const bob = new Person2("Bob", "bla bla");
}
catch(error) {
  if (error instanceof PersonError) {
    console.log("Ошибка типа Person. Некорректное значение:", error.argument);
  }
  console.log(error.message);
}