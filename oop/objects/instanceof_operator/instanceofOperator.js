// Оператор instanceof позволяет проверить, с помощью какого конструктора создан объект. Если объект создан с помощью
// определенного конструктора, то оператор возвращает true:
function User(pName, pAge) {
  this.name = pName;
  this.age = pAge;
  this.displayInfo = function() {
    document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
  };
}
function Car(mName, mYear) {
  this.name = mName;
  this.year = mYear;
  this.getCarInfo = function() {
    document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
  };
}

let tom = new User("Том", 26);
let isUser = tom instanceof User;
let isCar = tom instanceof Car;
console.log(isUser);    // true
console.log(isCar);     // false