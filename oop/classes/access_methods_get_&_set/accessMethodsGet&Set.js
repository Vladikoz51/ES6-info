// Для опосредования доступа к свойствам класса в последних стандартах JavaScript была добавлена поддержка методов
// доступа - get и set. Сначала рассмотрим проблему, с которой мы можем столкнуться:
class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let tom = new Person("Tom", 37);
console.log(tom.age);   // 37
tom.age = -15;
console.log(tom.age);   // -15
// Класс Person определяет два свойства - name (имя) и age (возраст человека), значения которых мы можем получить или
// установить. Но что если мы передадим некорректные значения? Так, в примере выше свойству age передается отрицательное
// число, но возраст не может быть отрицательным.
// Чтобы выйти из этой ситуации, мы можем определить приватное поле age, к которому можно было бы обратиться только из
// текущего класса. А для получения или установки его значения создать специальные методы:
class Person2 {
  #ageValue = 1;
  constructor(name, age) {
    this.name = name;
    this.setAge(age);
  }
  getAge(){
    return this.#ageValue;
  }
  setAge(value){ if(value>0 && value < 110) this.#ageValue = value; }
}
tom = new Person2("Tom", 37);
console.log(tom.getAge());  // 37
tom.setAge(-15);
console.log(tom.getAge());  // 37

// Но есть и другое решение - применение методов доступа get и set.


//----------------------------------------------Методы get и set--------------------------------------------------------
class Person3 {
  #ageValue = 1;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  set age(value){
    console.log(`Передано ${value}`);
    if(value > 0 && value < 110) this.#ageValue = value;
  }
  get age() {
    return this.#ageValue;
  }
}
tom = new Person3("Tom", 37);
console.log(tom.age);
tom.age = -15;
console.log(tom.age);
// Стоит отметить, что работа с методами доступа производится также, как с обычными свойствами. Так, для получения
// значения нужно написать tom.age, а для установки значения tom.age = -15;