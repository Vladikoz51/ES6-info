// Оператор ?. или optional changing-оператор позволяет проверить объект и его свойства и методы на null и undefined, и
// если объект или его свойства/методы определены, то обратиться к его свойствам или методам:
let tom = null;
let bob = {name: "Bob"};

let printName = function (person) {
  console.log(person.name);
}
// printName(tom); // Uncaught TypeError: Cannot read properties of null (reading "name")
printName(bob);
// В данном случае переменная tom равна null, соответственно у ней нет свойства name. Соответственно при передаче этого
// объекта в функцию printName мы получим ошибку. В этом случае мы можем перед обращением к объекту проверять его на
// null и undefined:
printName = function (person) {
  if (person !== null && person !== undefined) {console.log(person.name);}
}
printName(tom);
printName(bob);
// Также мы можем сократить проверку:
// Если person равен null или undefined, то if(person) возвратит false.
printName = function (person) {
  if (person) {console.log(person.name);}
}

// Однако оператор ?. предлагает более элегантный способ решения:
printName = function (person) {
  console.log(person?.name);
}
printName(tom); // undefined
printName(bob); // Bob
// После названия объекта указывается оператор ?. - если значение не равно null и undefined, то идет обращение к
// свойству/методу, которые указаны после точки. Если же значение равно null/undefined, то обращения к свойству/методу
// не происходит. И на консоли мы увидим undefined.
// Данный оператор можно использовать перед обращением как к свойствам, так и к методам объекта:
tom = undefined;
bob = {
  name: "Bob",
  sayHi(){
    console.log(`Hi! I am ${this.name}`);
  }
};

console.log(tom?.name); // undefined
console.log(bob?.name); // Bob
tom?.sayHi();           // не выполняется
bob?.sayHi();           // Hi! I am Bob
// В данном случае обращение к свойству name и методу sayHi() происходит только в том случае, если объект не
// равен null/undefined.


//------------------------------------------------Проверка наличия свойства---------------------------------------------
// Объект может быть определен, однако не иметь какого-то свойства:
tom = { name: "Tom"};
bob = {
  name: "Bob",
  company: {
    title: "Microsoft"
  }
};

console.log(tom.company?.title);    // undefined
console.log(bob.company?.title);    // Microsoft
// Подобным образом мы можем обращаться к свойствам объекта с помощью синтаксиса массивов:
console.log(tom.company?.["title"]);
console.log(bob.company?.["title"]);

// Проверка свойства-массива
// Аналогично мы можем проверять наличие свойства-массива перед обращением к его элементам:
tom = { name: "Tom"};
bob = {
  name: "Bob",
  languages: ["javascript", "typescript"]
};
console.log(tom.languages?.[0]);    // undefined
console.log(bob.languages?.[0]);    // javascript


//---------------------------------------------------Проверка метода----------------------------------------------------
// Объект также может не иметь вызываемого у него метода. Если метод не определен, то при обращении к неопределенному
// методу мы столкнемся с ошибкой, и в этом случае также можно проверять наличие метода:
tom = { name: "Tom"};
bob = {
  name: "Bob",
  say(words){
    console.log(words);
  }
};
console.log(tom.say?.("my name is Tom"));   // undefined
console.log(bob.say?.("my name is Bob"));   // my name is Bob


//------------------------------------------------------Цепочка проверок------------------------------------------------
// С помощью оператора ?. можно создавать цепочки проверок, последовательно проверяя, представляет ли значение
// null/undefined:
let sam = {name: "Sam"};
tom = {
  name: "Tom",
  company: { title: "Google"}
};
bob = {
  name: "Bob",
  company: {
    title: "Microsoft",
    print(){
      console.log(`Компания ${this.title}`)
    }
  }
};
sam?.company?.print?.();    // не вызывается - нет свойства company
tom?.company?.print?.();    // не вызывается - нет метода print
bob?.company?.print?.();    // Компания Microsoft
