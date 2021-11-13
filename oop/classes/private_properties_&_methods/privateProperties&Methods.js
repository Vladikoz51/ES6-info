//----------------------------------------------------Приватные поля----------------------------------------------------
// Иногда необходимо, чтобы к данным или действиям извне класса нельзя было обратиться, и чтобы к ним можно было
// обращаться только внутри этого же класса. Или иными словами, сделать свойства и методы класса приватными - доступными
// только для этого класса. И язык JavaScript предоставляет для этого необходимый инструментарий. Для этого название
// полей и методов должно начинаться с символа решетки #.
class Person {
  // При создании приватных свойств, недостаточно определить их в конструкторе, нужно дополнительно объявить их в теле
  // класса.
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  get personName() {
    return this.#name;
  }
  set personName(name) {
    if (typeof name === 'string' && name) {
      this.#name = name;
    }
  }
  print(){
    console.log(`Name: ${this.#name}  Age: ${this.#age}`);
  }
}
const vladimir = new Person('Vladimir', 34);
// vladimir.#name = "Sam";   // ! Ошибка - нельзя обратиться к приватному полю
// vladimir.#age = -45;      // ! Ошибка - нельзя обратиться к приватному полю
vladimir.print();

// Для обращения к приватным полям нужно использовать геттеры и сеттеры.
// // при вызове геттера и сеттера, несмотря на то что это методы, круглые скобки не пишутся
vladimir.personName ='Volodya';
vladimir.personName ='';
console.log(vladimir.personName);


//------------------------------------------------Приватные методы------------------------------------------------------
// Названия приватных методов также предваряются символом #:
class Person2{
  #name = "undefined";
  #age = 1;
  constructor(name, age){
    this.#name = this.#checkName(name);
    this.personAge = age;
  }
  #checkName(name){
    if (name !== "admin") {return name;}
  }
  get personAge() {
    return this.#age
  }
  set personAge(age) {
    if (age > 0 && age < 110) this.#age = age;
  }
  print() {
    console.log(`Name: ${this.#name}  Age: ${this.#age}`);
  }
}
const tom = new Person2("Tom", 37);
tom.print();    // Name: Tom  Age: 37
const bob = new Person2("admin", 41);
bob.print();    // Name: Undefined  Age 41
//let personName = bob.#checkName("admin"); // ! Ошибка - нельзя обратится к приватному методу
// Как правило, подобные приватные методы используются для выполнения каких-то вспомогательных действий, как, например,
// валидация в примере выше, и которые нет смысла делать доступными извне.