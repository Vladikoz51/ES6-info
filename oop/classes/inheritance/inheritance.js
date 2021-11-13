// Наследование позволяет одним классам автоматически получить функцонал других классов и тем самым сократить объем
// кода. Для наследования одного класса от другого применяется ключевое слово extends:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  work() {
    console.log(`${this.name} works in ${this.company}`);
  }
}
// Производный класс также может определить свой конструктор. Если производный класс определяет конструктор, то в нем
// должен быть вызван конструктор базового класса. Для обращения в производном классе к функциональности базового класса,
// в том числе для обращения к конструктору базового класса, применяется ключевое слово super.
let tom = new Person("Tom", 34);
tom.print();    // Name: Tom  Age: 34
let sam = new Employee("Sam", 25, "Google");
sam.print();    // Name: Sam  Age: 25
sam.work();     // Sam works in Google


// Переопределение методов базового класса.
// Производный класс, как и в случае с конструктором, может переопределять методы базового класса. Так, в примере выше
// метод print() класса Person выводит имя и возраст человека. Но что, если мы хотим, чтобы для работника метод print()
// выводил также и компанию? В этом случае мы можем определить в классе Employee свой метод print():
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
}
class Employee2 extends Person2 {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  print() {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
    console.log(`Company: ${this.company}`);
  }
  work() {
    console.log(`${this.name} works in ${this.company}`);
  }
}
sam = new Employee2("Sam", 25, "Google");
sam.print();    // Name: Sam  Age: 25
                // Company: Google
// Однако в коде выше мы видим, что первая строка метода print() в классе Employee по сути повторяет код метода print()
// из класса Person. В данном случае это всего одна строка, но в другой ситуации повторяемый код мог бы больше. И чтобы
// не повторяться, мы опять же можем просто обратиться к реализации метода print() родительского класса Person через
// super:
class Employee3 extends Person2 {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  print() {
    super.print();
    console.log(`Company: ${this.company}`);
  }
  work() {
    console.log(`${this.name} works in ${this.company}`);
  }
}
sam = new Employee3("Sam", 25, "Google");
sam.print();    // Name: Sam  Age: 25
                // Company: Google


// Наследование и приватные поля и методы
// При наследовании стоит учитывать, что производный класс может обращаться к любой функциональности базового класса,
// кроме приватных полей и методов. Например:
class Person3 {
  #name;
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }
  print(){
    console.log(`Name: ${this.#name}  Age: ${this.age}`);
  }
}
class Employee4 extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  print() {
    super.print();
    console.log(`Company: ${this.company}`);
  }
  work() {
    // console.log(`${this.#name} works in ${this.company}`);  // ! Ошибка - поле #name недоступно из Employee
  }
}
// В данном случае поле #name в классе Person определено как приватное, поэтому доступно только внутри этого класса.
// Попытка обратиться к этому полю в классе-наследнике Employee приведет к ошибке вне зависимости будет идти обращение
// через this.#name или super.#name.