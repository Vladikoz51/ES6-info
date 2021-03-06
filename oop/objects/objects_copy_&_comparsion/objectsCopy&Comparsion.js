//-------------------------------------------------Копирование объектов-------------------------------------------------
let tom = { name: "Tom"};
let bob = tom;
// проверяем свойство name у обоих констант
console.log(tom.name);  // Tom
console.log(bob.name);  // Tom

// меняем свойство name у константы bob
bob.name = "Bob";
// повторно проверяем свойство name у обоих констант
console.log("После изменения")
console.log(tom.name);  // Bob
console.log(bob.name);  // Bob
// В данном случае константа bob получает ссылку или условно говоря адрес константы tom, поэтому после этого присвоения
// обе константы по сути указывают на один и тот же объект в памяти.
// Добавим к объекту новое свойство через одну из констант:
bob.age = 37;
console.log(tom.age);
// Что же если мы хотим скопировать из объекта свойства, но при этом обе константы или переменных указывали бы на
// совершенно разные объекты, изменения одного из которых никак бы не затрагивали другой? В этом случае мы можем
// воспользоваться встроенным методом Object.assign().


// Метод Object.assign
// Метод Object.assign() принимает два параметра: Object.assign(target, ...sources)
// Первый параметр - target представляет объект, в который надо скопировать свойства. Второй параметр - ...sources -
// набор объектов, из которых надо скопировать свойства (то есть мы можем скопировать свойства сразу из нескольких
// объектов).
// Возвращает метод объект target, в который скопированы свойства из объектов sources.
tom = { name: "Tom", age: 37};
bob = Object.assign({}, tom);
bob.name = "Bob";
bob.age = 41;
console.log(`Объект tom. Name: ${tom.name}   Age: ${tom.age}`);
console.log(`Объект bob. Name: ${bob.name}   Age: ${bob.age}`);
// В данном случае вызов Object.assign({}, tom) означает, что мы копируем данные из объекта tom в пустой объект {}.
// Результатом этого копирования стал объект bob. Причем это совсем другой объект, нежели tom. И любые изменения с
// константой bob здесь никак не затронут константу tom.

// Подобным образом можно копировать данные из нескольких объектов:
tom = { name: "Tom", age: 37};
sam = { age: 45};
const person = { height: 170};
Object.assign(person, tom, sam);
console.log(person);    // {height: 170, name: "Tom", age: 45}
// Здесь оба объекта - tom и sam содержат свойство age, но в объекте person свойство age равно 45 - значение из объекта
// sam, потому что копирование из объекта sam производится в последнюю очередь.

// Несмотря на то, что Object.assign() прекрасно работает для простых объектов, но что будет, если свойство копируемого
// объекта также представляет объект:
tom = { name: "Tom", company: {title: "Microsoft"}};
bob = Object.assign({}, tom);
bob.name = "Bob";
bob.company.title = "Google";
console.log(tom.name);      // Tom
console.log(tom.company.title);     // Google
// Здесь свойство company объекта tom представляет объект с одним свойством. И при копировании объект bob получит не
// копию значения tom.company, а ссылку на этот объект. Поэтому изменения bob.company затронут и tom.company.

// Копирование объекта с помощью spread-оператора:
// spread-оператор ... позволяет разложить объект на различные пары свойство-значение, которые можно передать другому
// объекту.
tom = { name: "Tom", age: 37, company: "Google"};
bob = {...tom}
bob.name = "Bob";
console.log(tom);   // {name: "Tom", age: 37, company: "Google"}
console.log(bob);   // {name: "Bob", age: 37, company: "Google"}
// В данном случае объекту bob передаются копии свойств объекта tom.
// Если какие-то свойства нового объекта должны иметь другие значения (как в примере выше свойство name), то их можно
// указать в конце:
tom = { name: "Tom", age: 37, company: "Google"};
bob = {...tom, name: "Bob"};
console.log(bob);   // {name: "Bob", age: 37, company: "Google"}
// Как видно из предыдущего примера, обе константы после копирования представляют ссылки на разные объекты, и изменения
// одного из них никак не затронет другой объект. Тем не менее если объекты содержат вложенные объекты, то эти вложенные
// объекты при копировании опять же по сути будут представлять ссылки на один и тот же объект:
tom = { name: "Tom", age: 37, company: {title: "Microsoft"}};
bob = {...tom}
bob.name = "Bob";
bob.company.title = "Google";
console.log(`${tom.name} - ${tom.company.title}`);  // Tom - Google
console.log(`${bob.name} - ${bob.company.title}`);  // Bob - Google


//---------------------------------------------------Сравнение объектов-------------------------------------------------
// Сравним два объекта с помощью стандартных операций сравнения и эквивалентности:
tom = { name: "Tom"};
bob = { name: "Bob"};
console.log(tom == bob);    // false
console.log(tom === bob);   // false
// Оба оператора в данном случае возвратят значение false, то есть объекты не равны. Причем даже если значения свойств
// объектов будет одинаковым, то мы все равно в обоих случаях получим false
tom = { name: "Tom"};
bob = { name: "Tom"};
console.log(tom == bob);    // false
console.log(tom === bob);   // false
// Однако, что будет, если обе константы (переменных) хранят ссылку на один и тот же объект:
tom = { name: "Tom"};
bob = tom;
console.log(tom == bob);    // true
console.log(tom === bob);   // true
// В этом случае в обоих случаях мы получим true, поскольку значения обоих констант равны, так как по сути это одно и то
// же значение.

const arr1 = [{name: 'Tom'}];
const arr2 = [...arr1];
arr2[0].name = 'Bob';
console.log(arr1, arr2);