// Одним из преимуществ промисов является то, что они позволяют создавать цепочки промисов. Так, ранее мы рассмотрели
// применение методов then() и catch() для получения и обработки результатов и ошибок асинхронной операции. При
// выполнении эти методы генерируют новый объект Promise, для которого мы также можем вызвать методы then() и catch(),
// и, таким образом, построить цепочку промисов. Благодаря этому мы можем обрабатывать подряд несколько асинхронных
// операций - одна за другой.
// promise.then(..).then(..).then(..)
// Возвращаемое значение из функции-обработчика в методе then() передается в последующий вызов метода then() в цепочке:
let helloPromise = new Promise(function(resolve) {
  resolve("Hello");
})

let worldPromise = helloPromise.then(function(value) {
  // возвращаем новое значение
  return value + " World";
});
let metanitPromise = worldPromise.then(function(value) {
  // возвращаем новое значение
  return value + " from METANIT.COM";
});
metanitPromise.then(function(finalValue) {
  // получаем финальное значение
  console.log(finalValue);    // Hello World from METANIT.COM
});

// Здесь для большей ясности весь процесс раздел на раздельные промисы: helloPromise, worldPromise и metanitPromise.
// Рассмотрим поэтапно.
// 1. Сначала создается промис helloPromise, в асинхронной операции с помощью вызова resolve("Hello") промис переводится
// в состояние fulfilled, то есть выполнение операции успешно завершено. А вовне передается значение "Hello".
// 2. Далее у промиса helloPromise вызывается метод then(), в качестве значения параметра value функция обработчика
// получает строку "Hello" и затем возвращает строку "Hello World". Эту строку затем можно будет получить через метод
// then() нового промиса, который генерируется вызовом helloPromise.then() и который называется здесь worldPromise.
// 3. Затем аналогичным образом у промиса worldPromise вызывается метод then(), в качестве значения параметра value
// функция обработчика получает строку "Hello World" и затем возвращает строку "Hello World from METANIT.COM". Вызов
// worldPromise.then() возвращает новый промис metanitPromise.
// 4. На последним этапе у промиса metanitPromise вызывается метод then(), Здесь через параметр finalValue получаем
// финальное значение - строку "Hello World from METANIT.COM" и выводим на консоль. После этого цепочка завершена.

// Для большей краткости и наглядности мы можем упростить цепочку:
new Promise(resolve => resolve("Hello"))
  .then(value => value + " World")
  .then(value => value + " from METANIT.COM")
  .then(finalValue => console.log(finalValue));


//-------------------------------------------------Обработка ошибок-----------------------------------------------------
// Для обработки ошибок к цепочки в конце добавляется метод catch(), который также возвращает объект Promise. Рассмотрим
// на простом примере:
function generateNumber(str){
  return new Promise((resolve, reject) => {
    const parsed = parseInt(str);
    if (isNaN(parsed)) reject("Not a number");
    else resolve(parsed);
  });
}
function printNumber(str){
  generateNumber(str)
    .then(value => console.log(value))
    .catch(error => console.log(error));
}
printNumber("rty"); // Not a number
printNumber("3");   // 3


// Обработка ошибок в цепочке промисов
// Теперь усложним цепочку. Пусть у нас в цепочке выполняется сразу несколько промисов:
function printNumber2(str) {
  generateNumber(str)
    .then(value => {
      if (value === 4) {throw "Несчастливое число";}
      return value * value;
    })
    .then(finalValue => console.log(`Result: ${finalValue}`))
    .catch(error => console.error(error));
}
printNumber2("rty"); // Not a number
printNumber2("3");   // Result: 9
printNumber2("4");   // Несчастливое число
printNumber2("5");    // Result: 25
// Здесь для простоты весь код вынесен в функцию generateNumber(), которая создает цепочку промисов. В этой цепочке
// промисов также получаем извне некоторое значение, пытаемся конвертировать его в число, и затем вычисляем его квадрат
// и выводим на консоль. В конце находится метод catch(). В этот метод передается обработчик ошибки, который получает
// ошибку и выводит ее на консоль. В итоге если в цепочке промисов на одном из этапов генерируется ошибка (в силу
// внутренней работы кода, например, при генерации ошибки с помощью оператора throw, либо при вызове функции reject()),
// то все последующие вызовы метода then(), которые содержат только обработку значения, игнорируются, и выполнение
// цепочки переходит к методу catch().


// Возвращаемый промис из catch
// При этом стоит отметить, что, поскольку catch() возвращает объект Promise, то далее также можно продолжить цепочку:
function printNumber3(str){
  generateNumber(str)
    .then(value => value * value)
    .then(value => console.log(`Result: ${value}`))
    .catch(error => console.error(error))
    .then(() => console.log("Work has been done"));
}
printNumber3("3");
// Причем метод then() после catch() будет вызываться, даже если не произошло ошибок и сам метод catch() не выполнялся.
// И мы даже можем из функции-обработчика ошибки в catch() также можем передавать некоторое значение и получать через
// последующий метод then():
function printNumber4(str){
  generateNumber(str)
    .then(value => value * value)
    .then(value => console.log(`Result: ${value}`))
    .catch(error => {
      console.log(error);
      return 0;
    })
    .then(value => console.log("Status code:", value));
}
printNumber4("ert3");


//-------------------------------------------------Метод finally--------------------------------------------------------
// Кроме методов then() и catch() объект Promise для обработка результата также предоставляет метод finally(). Этот
// метод выполняется в конце цепочки промисов вне зависимости произошла ошибка или выполнение промиса прошло успешно.
// В качестве параметра метод принимает функцию, которая выполняет некоторые финальные действия по обработке работы
// промиса:
function printNumber5(str){
  generateNumber(str)
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log("End"));
}

printNumber5("3");
printNumber("triuy");
// Метод finally() возвращает объект Promise, поэтому после него можно продолжить продолжить цепочку:
function printNumber6(str){
  generateNumber(str)
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log("Выполнение промиса завершено"))
    .then(() => console.log("Промис все еще работает"));
}
printNumber6("3");
// Стоит отметить что в последний метод then() также можно передать данные. Но эти данные передаются не из метода
// finally(), а из предыдущего метода then() или catch():
function printNumber7(str){
  generateNumber(str)
    .then(value => {
      console.log(value);
      return "hello from then";
    })
    .catch(error => {
      console.log(error);
      return "hello from catch";
    })
    .finally(() => {
      console.log("End");
      return "hello from finally";
    })
    .then(message => console.log(message));
}
printNumber7("3");