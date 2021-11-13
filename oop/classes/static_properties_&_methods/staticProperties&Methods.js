// Кроме обычных полей и методов класс может определять статические поля и методы. В отличие от обычных полей/свойств и
// методов они относятся ко всему классу, а не к отдельному объекту.

//-----------------------------------------------Статические поля-------------------------------------------------------
// Статические поля хранят состояния класса в целом, а не отдельного объекта. Перед названием статического поля ставится
// ключевое слово static. Например:
class Person{
  static retirementAge = 65;
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  print(){
    console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
  }
}

console.log(Person.retirementAge); // 65
Person.retirementAge = 62;
console.log(Person.retirementAge); // 62
// При этом мы НЕ можем в нестатических методах и конструкторе класса обращаться к этим полям через this, если мы все
// таки хотим обратиться к статическим полям и методам внутри нестатических методов и конструкторе класса, то опять же,
// как и в общем случае, необходимо использовать имя класса.


//-------------------------------------------------Статические методы---------------------------------------------------
// Статические методы, как и статические поля, определяются для всего класса в целом, а не для отдельного объекта. Для
// их определения перед названием метода ставится оператор static. Например:
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
  }
  static printClassInfo() {
    console.log("Класс Person представляет человека");
  }
}
Person2.printClassInfo();    // Класс Person представляет человека

// Поскольку статический метод относится классу в целом, а не к объекту, то мы НЕ можем обращаться в нем к нестатическим
// полям/свойствам и методам объекта через this.
// Если необходимо в статическом методе обратиться к свойствам объекта, то мы можем определить в методе параметр, через
// который в метод будет передаваться объект:
class Person3 {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  static print(person){
    console.log(`Имя: ${person.name}  Возраст: ${person.age}`);
  }
}
let tom = new Person("Tom", 37);
let bob = new Person("Bob", 41);
Person3.print(tom);  // Tom 37
Person3.print(bob);  // Bob 41


//-----------------------------------------Приватные статические поля и методы------------------------------------------
// Как и обычные поля и методы статические поля и методы могут быть приватными. Такие поля и методы доступны только из
// других статических методов класса:
class Person4 {
  static #retirementAge = 65;
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  print(){
    console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
  }
  static calculateRestAges(person){
    if(this.#retirementAge > person.age){
      const restAges = this.#retirementAge - person.age;
      console.log(`До пенсии осталось ${restAges} лет`);
    }
    else console.log("Вы уже на пенсии");
  }
}
// console.log(Person.#retirementAge);  // ! Ошибка: поле retirementAge -приватное
tom = new Person("Tom", 37);
Person4.calculateRestAges(tom);      // До пенсии осталось 28 лет
bob = new Person("Bob", 71);
Person4.calculateRestAges(bob);      // Вы уже на пенсии