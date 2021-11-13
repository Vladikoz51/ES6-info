//----------------------------------------------Метод Promise.all-------------------------------------------------------
// Метод Promise.all() возвращает единый объект Promise, который объединяет набор промисов.
// Рассмотрим следующий код:
let promise1 = new Promise((resolve,reject) => {
  setTimeout(resolve, 500, "Hello");
});
let promise2 = new Promise((resolve,reject) => {
  setTimeout(resolve, 1000, "World");
});
promise1.then(value => console.log(value));  // Hello
promise2.then(value => console.log(value));  // World
// Здесь определено два промиса. Асинхронная операция первого промиса выполняется через 500 миллисекунд, действие
// второго промиса выполняется через 1000 миллисекунд. Оба этих промиса выполняются независимо друг от друга. Общая
// продолжительность обоих промисов займет 1500 миллисекунд (500 - первый + 1000 второй).
// Функция Promise.all() позволяет объединить несколько промисов и выполнять их параллельно, но как единое целое. В
// качестве параметра функция принимает набор промисов:
// Promise.all([промис1, промис2, ... прромисN]);
// Возвращаемым результатом функции является новый объект Promise.
// Теперь изменим предыдущий пример, использовав функцию Promise.all():
Promise.all([promise1, promise2])
  .then(values => {
    const [promise1data, promise2data] = values;
    console.log(promise1data, promise2data);    // Hello World
  });
// Теперь данные обоих промисов возвращаются вместе и доступны в методе then() в виде массива values. Причем общее время
// выполнения составляет время выполнения наиболее продолжительнного промиса - то есть в данном случае 1000 миллисекунд
// (вместо прежних 1500 миллисекунд).

// Значения всех промисов возвращаются только если все они завершились успешно. Но если в асинхронной операции хотя бы
// одного промиса возникнет ошибка в силу внутренней логики или из-за вызова функции reject(), то все промисы перейдут в
// состояние rejected, соответственно:
promise1 = new Promise((resolve,reject) => {
  reject("Непредвиденная ошибка");
  setTimeout(resolve, 500, "Hello");
});
promise2 = new Promise((resolve,reject) => {
  setTimeout(resolve, 1000, "World");
});

Promise.all([promise1, promise2])
  .then(values => {
    const [promise1data, promise2data] = values;
    console.log(promise1data, promise2data);
  })
  .catch(error => console.log(error)); // Непредвиденная ошибка
// В данном случае мы явным образом переводим переводим первый промис в состояние rejected, соответственно в это
// состояние переводятся все промисы, переданные в функцию Promise.all(). И далее через метод catch(), как и в общем
// случае, мы можем обработать возникшую ошибку.


//----------------------------------------------Метод Promise.allSettled------------------------------------------------
// Метод Promise.allSettled() также как и Promise.all() принимает набор промисов и выполняет их как единое целое, но
// возвращает объект со статусом и результатом промиса:
Promise.allSettled([promise1, promise2])
  .then(values => {
    const [promise1data, promise2data] = values;
    console.log(promise1data);  // {status: "rejected", reason: "Непредвиденная ошибка"}
    console.log(promise2data);  // {status: "fulfilled", value: "World"}
  });
// При этом при возникновении ошибки в одном из промисов (как в случае выше с первым промисом) функция также передается
// результаты в метод then(), который следует дальше в цепочке. Каждый результат представляет объект. Первое свойство
// этого объекта - status описывает статус или состояние промиса. Если произошла ошибка, статус rejected, а второе
// свойство представляет объект ошибки. Если промис успешно завершил выполнение, то статус fulfilled, а второе свойство
// - value хранит результат промиса.


//-------------------------------------------------Метод Promise.race---------------------------------------------------
// Метод Promise.race() также принимает несколько промисов, только возвращает первый завершенный промис (вне
// зависимости завершился от успешно или с ошибкой):
promise1 = new Promise((resolve) => {
  setTimeout(resolve, 500, "Hello(race)");
});
promise2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "World");
});
Promise.race([promise1, promise2])
  .then(value => console.log(value))       // Hello
  .catch(error => console.log(error));
// В данном случае первым выполненным будет промис promise1. Поэтому в метод then(value => console.log(value)) в
// качестве value будет передана строка "Hello".


//------------------------------------------------Метод Promise.any-----------------------------------------------------
// Метод Promise.any() принимает несколько промисов и возвращает первый успешно завершившийся промис:
promise1 = new Promise((resolve, reject) => {
  reject("error in promise1");
  setTimeout(resolve, 500, "Hello(any)");
});
promise2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "World(any)");
});
Promise.any([promise1, promise2])
  .then(value => console.log(value))       // World
  .catch(error => console.log(error));
// Если же все промисы завершились с ошибкой, то генерируется исключение типа AggregateError:
promise1 = new Promise((resolve, reject) => {
  reject("error in promise1");
  setTimeout(resolve, 500, "Hello");
});
promise2 = new Promise((resolve, reject) => {
  reject("error in promise2");
  setTimeout(resolve, 1000, "World");
});
Promise.any([promise1, promise2])
  .then(value => console.log(value))
  .catch(e => console.log(e.errors));  // ["error in promise1", "error in promise2"]