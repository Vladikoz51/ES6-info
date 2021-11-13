// Одним из преимуществ промисов является более простая обработка ошибок. Для получения и обработки ошибки мы можем
// использовать функцию catch() объекта Promise, которая в качестве параметра принимает функцию обработчика ошибки:
let myPromise = new Promise(function(resolve, reject){
  console.log("Выполнение асинхронной операции");
  reject("Переданы некорректные данные");
});
myPromise.catch(function(error) {
  console.log(error);
});
// Функция catch() в качестве параметра принимает обработчик ошибки. Параметром этой функции-обработчика является то
// значение, которое передается в reject().


//-------------------------------------------------Генерация ошибки-----------------------------------------------------
// Выше для извещения о возникшей ошибке вызывалась функция reject(). Но стоит отметить, что ошибка может возникнуть и
// без вызова функции reject(). И если в выполняемой в промисе операции генерируется ошибка в силу тех или иных причин,
// то вся операция также завершается ошибкой. Например, в следующем коде вызывается нигде не определенная функция
// getSomeWork():
myPromise = new Promise(function(resolve) {
  console.log("Выполнение асинхронной операции");
  getSomeWork();      // вызов не существующей функции
  resolve("Hello world!");
});
myPromise.catch(function(error) {
  console.log(error);
});
// Поскольку функция getSomeWork() нигде не объявлена, то выполнение асинхронной задачи завершится ошибкой и не дойдет
// до вызова resolve("Hello world!"). Поэтому сработает функция обработки ошибок из catch(), которая через параметр
// error получит информацию о возникшей ошибке, и в консоли браузера мы увидим сообщение об ошибке:


// Также ошибка может быть результатом вызова оператора throw, который генерирует ошибку:
myPromise = new Promise(function(resolve, reject) {
  console.log("Выполнение асинхронной операции");
  const parsed = parseInt("Hello");
  if (isNaN(parsed)) {
    throw "Not a number";           // Генерируем ошибку
  }
  resolve(parsed);
});
myPromise.catch(function(error) {
  console.log(error);
});
// Данная ситуация может показаться искуственной, так как нам нет смысла генерировать в коде выше ошибку с помощью
// throw, поскольку в этом случае мы также можем передать сообщение об ошибке в функцию reject:
// if (isNaN(parsed)) {
//   reject("Not a number");
// }
// Однако данный оператор может применяться во внешней функции, которую мы вызываем в коде:
function getNumber(str) {
  const parsed = parseInt(str);
  if (isNaN(parsed)) {throw "Not a number";}             // Генерируем ошибку
  else {return parsed;}
}
myPromise = new Promise(function(resolve){
  console.log("Выполнение асинхронной операции");
  const result = getNumber("hello");
  resolve(result);
});
myPromise.catch(function(error) {
  console.log(error);
});


// Как и в общем случае, операции, которые могут генерировать ошибку, можно помещать в конструкцию try..catch, а при
// возникновении исключения в блоке catch вызывать функцию reject():
myPromise = new Promise(function(resolve, reject) {
  try {
    console.log("Выполнение асинхронной операции");
    getSomeWork();      // вызов не существующей функции
    resolve("Hello world!");
  }
  catch(err){
    reject(`Произошла ошибка: ${err.message}`);
  }
});
myPromise.catch(function(error) {
  console.log(error);
});


//-----------------------------------Обработка ошибки с помощью функции then--------------------------------------------
// Кроме функции catch для получения информации об ошибке и ее обработки также можно использовать функцию then() - ее
// второй параметр представляет обработчик ошибки, который в качестве параметра получает переданное из функции reject
// значение:
// promise.then(function(value) {
//     // получение значения
//     },
//     function(error){
//       // обработка ошибки
//     });
// Второй параметр функции then() представляет функцию обработчика ошибок. С помощью параметра error в
// функции-обработчика мы можем получить переданное в reject() значение, либо информацию о возникшей ошибке.
// Рассмотрим следующий пример:
function generateNumber(str){
  return new Promise(function(resolve, reject) {
    const parsed = parseInt(str);
    if (isNaN(parsed)) {reject("значение не является числом");}
    else resolve(parsed);
  })
    .then(function(value){ console.log("Результат операции:", value);},
      function(error){ console.log("Возникла ошибка:", error);});
}
generateNumber("23");
generateNumber("hello");
