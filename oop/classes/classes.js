// Классы появились в JS в ES6 и синтаксис выглядит следующим образом


// Свойства указанные в теле конструктора после слова this создаются автоматически при создании объекта, не нужно
// прописывать их в классе отдельно.
// Hoisting не работает для классов, т.е. нельзя создать экземпляр класса до объявления класса.
class Animal {
    // Статические свойства в JS создаются при помощи оператора static, обращаться к ним можно только через имя класса,
    // при обращении через объект выдаст undefined.
    static status = 'alive';
    constructor(kind, breed) {
        this.kind = kind;
        this.breed = breed;
    }

    // В JS у классов также есть геттеры и сеттеры, для того чтобы обозначить метод как геттер нужно перед именем метода
    // написать оператор get, с сеттером аналогично, у геттера и сеттера может быть одинаковое имя
    get animalBreed() {
        return this.breed;
    }

    set animalBreed(breed) {
        this.breed = breed;
    }

    getInfo() {
        console.log(`This animal is ${this.kind} the breed is ${this.breed}.`);
    }

    saySomething(voice) {
        console.log(`The ${this.kind} says ${voice}`);
    }

    // В JS можно создавать статические методы, вызвать их можно только через класс к которому они принадлежат, через
    // объекты данного класса эти методы не вызываются.
    static aboutClass() {
        console.log("This class is using to create animals");
    }
}

class Dog extends Animal {
    constructor(breed) {
        super("dog", breed);
    }

    saySomething(voice = "Woff-woff") {
        super.saySomething(voice);
    }
}

class Fish extends Animal {
    constructor(breed) {
        super("fish", breed);
    }

    saySomething(voice = "...") {
        super.saySomething(voice);
    }
}




// Экземпляры класса создаются при помощи оператора new и имени класса, при этом вызывается конструктор и ему передаются
// аргументы, если в классе не описан конструктор то автоматически создается пустой конструктор.
const dog = new Dog("sheperd");
const fish = new Fish("crucian");
console.log(dog);
console.log(fish);
dog.getInfo();
dog.saySomething();
fish.getInfo();
fish.saySomething();

// при вызове геттера и сеттера, несмотря на то что это методы, круглые скобки не пишутся
console.log(dog.animalBreed);
dog.animalBreed = "retriver";
dog.getInfo();

Animal.aboutClass();
// dog.aboutClass(); // Выдаст ошибку.
console.log(Animal.status); // alive
console.log(Dog.status); // alive
console.log(dog.status); // undefined


//--- Применение классов на практике-------------------------------------------------------------------

// Рассмотрим как классы можно применять при работе с DOM

// Класс Component сохраняет в своем свойстве elem элемент DOM дерева и при помощи методов hide и show может управлять
// отображением данного элемента
class Component {
    constructor(selector) {
        this.elem = document.querySelector(selector);
    }

    hide() {
        this.elem.style.display = "none";
    }

    show() {
        this.elem.style.display = "block";
    }
}
// Класс Box наследуется от класса Component, поэтому в конструкторе идет вызов метода super и задаются стили для
// объекта класса Box
class Box extends Component {
    constructor({selector, size, color}) {
        super(selector);
        this.elem.style.width = this.elem.style.height = `${size}px`;
        this.elem.style.backgroundColor = color;
    }
}

const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: "red"
});

const box2 = new Box({
    selector: "#box2",
    size: 150,
    color: "blue"
});

setTimeout(() => {box1.hide(); box2.hide();}, 3000);
setTimeout(() => box1.show(), 5000);
setTimeout(() => box2.show(), 6000);

// Класс Circle наследуется от класса Box, поэтому в конструкторе через super вызывается конструктор класса Box.
class Circle extends Box {
    constructor(options) {
        super(options);
        this.elem.style.borderRadius = "50%";
    }
}

const circle1 = new Circle({selector: "#circle1", size: 200, color: "yellow"});
