// Генераторы представляют особый тип функции, которые используются для генерации значений. Для определения генераторов
// применяется символ звездочки *, который ставится после ключевого слова function. Например, определим простейший
// генератор:
function* getNumber(){
  yield 5;
}
let numberGenerator = getNumber();
let next = numberGenerator.next();
console.log(next);  // {value: 5, done: false}
// Здесь функция getNumber() представляет генератор. Основные моменты создания и применения генератора:
// 1. Функция генератора возвращает итератор, Для возвращения значения из генератора, как и вообще в итераторах,
// применяется оператор yield, после которого указывается возвращаемое значение.
// 2. Для возвращения значения из генератора, как и вообще в итераторах, применяется оператор yield, после которого
// указывается возвращаемое значение.
// 3. Для получения значения из генератора применяется оператор применяется метод next(). Так, в примере с помощью
// вызова функции getNumber() создается объект итератора в виде константа numberGenerator. Используя этот объект, мы
// можем получать из генератора значения. То есть по сути возвращается объект, свойство value которого содержит
// собственно сгенерированное значение. А свойство done указывает, достигли ли мы конца генератора.

// Теперь продолжим итерацию:
next = numberGenerator.next();
console.log(next); // {value: undefined, done: true}
// Функция генератора getNumber генерирует только одно значение - число 5. Поэтому при повторном вызове свойство value
// будет иметь значение undefined, а свойство done - true, то есть работа генератора завершена.

// Генератор может создавать/генерировать множество значений:
function* getNumber2(){
  yield 5;
  yield 25;
  yield 125;
}
numberGenerator = getNumber2();
console.log(numberGenerator.next()); // {value: 5, done: false}
console.log(numberGenerator.next()); // {value: 25, done: false}
console.log(numberGenerator.next()); // {value: 125, done: false}
console.log(numberGenerator.next()); // {value: undefined, done: true}
// То есть при первом вызове метода next() из итератора извлекается значение, которое идет после первого оператора yield,
// при втором вызове метода next() - значение после второго оператора yield и так далее.

// При этом важно понимать, что между двумя последовательными вызовами next() может пройти некоторое неопределенное
// время, между ними могут располагаться какие-то другие действия, и все равно генератор будет возвращать свое следующее
// значение.
// С помощью генераторов удобно создавать бесконечные последовательности:
function* points() {
  let x = 0;
  let y = 0;
  while(true) {
    yield {x:x, y:y};
    x += 2;
    y += 1;
  }
}
let pointGenerator = points();
console.log(pointGenerator.next().value); // {x: 0, y: 0}
console.log(pointGenerator.next().value); // {x: 2, y: 1}
console.log(pointGenerator.next().value); // {x: 4, y: 2}


// Возвращение из генератора и функция return
// Как выше мы увидели, каждый последующий вызов next() возвращает следующее значение генератора, однако мы можем
// завершить работу генератора с помощью метода return():
function* getNumber3() {
  yield 5;
  yield 25;
  yield 125;
}
numberGenerator = getNumber3();
console.log(numberGenerator.next());    // {value: 5, done: false}
numberGenerator.return();   // завершаем работу генератора
console.log(numberGenerator.next());    // {value: undefined, done: true}


// Получение значений генератора в цикле
// Поскольку для получения значений применяется итератор, то мы можем использовать цикл for...of:
numberGenerator = getNumber3();
for (const num of numberGenerator) {
  console.log(num);
}


//------------------------------------------Передача данных в генератор-------------------------------------------------
// Функция генератора, как и любая другая функция, может принимать параметры. Соответственно через параметры мы можем
// передать в генератор некоторые данные. Например:
function* getNumber4(start, end, step) {
  for (let n = start; n <= end; n +=step){
    yield n;
  }
}
numberGenerator = getNumber4(0, 8, 2);
for(num of numberGenerator){
  console.log(num);
}
// Другой пример - определим генератор, который возвращает данные из массива:
function* generateFromArray(items) {
  for (item of items)
    yield item;
}
const people = ["Tom", "Bob", "Sam"];
let personGenerator = generateFromArray(people);
for (person of personGenerator) {
  console.log(person);
}

// Передача данных в метод next
// С помощью next() можно передать в генератор данные. Переданные в этот метод данные можно получить в функции
// генератора через предыдущий вызов оператора yield:
function* getNumber5() {
  const n = yield 5;      // получаем значение numberGenerator.next(2).value
  console.log("n:", n);
  const m = yield 5 * n;  // получаем значение numberGenerator.next(3).value
  console.log("m:", m);
  yield 5 * m;
}
numberGenerator = getNumber5();
console.log(numberGenerator.next().value);      // 5
console.log(numberGenerator.next(2).value);     // 10
console.log(numberGenerator.next(3).value);     // 15


// Обработка ошибок генератора
// С помощью функции throw() мы можем сгенерировать в генераторе исключение. В качестве параметра в эту функцию
// передается произвольное значение, которое представляет информацию об ошибке:
function* generateData() {
  try {
    yield "Tom";
    yield "Bob";
    yield "Hello Work";
  }
  catch(error) {
    console.log("Error:", error);
  }
}
personGenerator = generateData();
console.log(personGenerator.next());        // {value: "Tom", done: false}
personGenerator.throw("Something wrong");   // Error: Something wrong
console.log(personGenerator.next());        // {value: undefined, done: true}
// Прежде всего в функции генератора для обработки возможного исключения используем конструкцию try..catch. В блоке
// catch с помощью параметра error мы можем получить информацию об ошибке, которая передается в функцию throw().
// Далее при использовании генератора мы можем вызвать эту функцию, передавая в нее произвольную информацию об ошибке (в
// данном случае это просто некоторое строковое сообщение).