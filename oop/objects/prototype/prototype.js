// Кроме непосредственного определения свойств и методов в конструкторе мы также можем использовать свойство prototype.
// Каждая функция имеет свойство prototype, представляющее прототип функции. То есть свойство User.prototype
// представляет прототип объектов User. И любые свойства и методы, которые будут определены в User.prototype, будут
// общими для всех объектов User.
// Например, после определения объекта User нам потребовалось добавить к нему метод и свойство:
function User(pName, pAge) {
  this.name = pName;
  this.age = pAge;
  this.displayInfo = function(){
    document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
  };
};

User.prototype.hello = function(){
  document.write(this.name + " говорит: 'Привет!'<br/>");
};
User.prototype.maxAge = 110;

let tom = new User("Том", 26);
tom.hello();
let john = new User("Джон", 28);
john.hello();
console.log(tom.maxAge); // 110
console.log(john.maxAge); // 110
// Здесь добавлены метод hello и свойство maxAge, и каждый объект User сможет их использовать. Но важно заметить, что
// значение свойства maxAge будет одно и то же для всех объектов, это разделяемое статическое свойство. В отличие,
// скажем, от свойства this.name, которое хранит значение для определенного объекта.
// В то же время мы можем определить в объекте свойство, которое будет назваться также, как и свойство прототипа. В этом
// случае собственное свойство объекта будет иметь приоритет перед свойством прототипа:
User.prototype.maxAge = 110;
tom = new User("Том", 26);
john = new User("Джон", 28);
tom.maxAge = 99;
console.log(tom.maxAge); // 99
console.log(john.maxAge); // 110