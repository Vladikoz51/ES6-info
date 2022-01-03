// Кроме создания новых объектов JavaScript предоставляет нам возможность создавать новые типы объектов с помощью
// конструкторов. Так, одним из способов создания объекта является применение конструктора типа Object:
let tom = new Object();
// После создания переменной tom она будет вести себя как объект типа Object.
// Конструктор позволяет определить новый тип объекта. Тип представляет собой абстрактное описание или шаблон объекта.
// Можно еще провести следующую аналогию. У нас у всех есть некоторое представление о человеке - наличие двух рук, двух
// ног, головы, пищеварительной, нервной системы и т.д. Есть некоторый шаблон - этот шаблон можно назвать типом. Реально
// же существующий человек является объектом этого типа.
// Определение типа может состоять из функции конструктора, методов и свойств.
// Для начала определим конструктор:
function User(pName, pAge) {
  this.name = pName;
  this.age = pAge;
  this.displayInfo = function() {
    document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
  };
}
// Конструктор - это обычная функция за тем исключением, что в ней мы можем установить свойства и методы. Для установки
// свойств и методов используется ключевое слово this.
// Как правило, названия конструкторов в отличие от названий обычных функций начинаются с большой буквы.
// После этого в программе мы можем определить объект типа User и использовать его свойства и методы:
// Чтобы вызвать конструктор, то есть создать объект типа User, надо использовать ключевое слово new.
tom = new User("Том", 26);
console.log(tom.name); // Том
tom.displayInfo();

// Подобным образом мы можем определить и другие типы и использовать их вместе:
// конструктор типа Car
function Car(mName, mYear) {
  this.name = mName;
  this.year = mYear;
  this.getCarInfo = function() {
    document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
  };
}
// конструктор типа User
function User2(pName, pAge) {
  this.name = pName;
  this.age = pAge;
  this.driveCar = function(car){
    document.write(this.name + " ведет машину " + car.name + "<br/>");
  };
  this.displayInfo = function(){
    document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
  };
};

tom = new User2("Том", 26);
tom.displayInfo();
let Bentley = new Car("Бентли", 2004);
tom.driveCar(Bentley);
