// Деструктуризация (destructuring) позволяет извлечь из объекта отдельные значения в переменные или константы:
let user = {
  name: "Tom",
  age: 24,
  phone: "+367438787",
  email: "tom@gmail.com"
};
let {name, email} = user;
console.log(name);      // Tom
console.log(email);     // tom@gmail.com
// При деструктуризации объекта переменные помещаются в фигурные скобки и им присваивается объект. Сопоставление между
// свойствами объекта и переменными/константами идет по имени.

// Мы можем указать, что мы хотим получить значения свойств объекта в переменные/константы с другим именем:
let {name: userName, email: mailAddress} = user;
console.log(userName);
console.log(mailAddress);

// Также можно задать для переменных/констант значения по умолчанию, если в объекте вдруг не окажется соответствующих
// свойств:
const {name2 = 'Sam', email: mailAddress2 = 'sam@gmail.com'} = user;
console.log(name2);
console.log(mailAddress2);

// Если переменная/константа при деструктуризации сопоставляется со свойством, который представляет сложный объект, то
// после деструктуризации эта переменная/константа также будет представлять сложный объект:
user = {
  name: "Tom",
  age: 24,
  account: {
    login: "tom555",
    password: "qwerty"
  }
};
const {account} = user;
console.log(account.login);         // tom555
console.log(account.password);      // qwerty
// о если нам мы хотим получить отдельные значения из вложенного сложного объекта, как в примере выше объект account
// внутри объекта user, то нам необязательно получать весь этот объект - мы также можем для его свойств предоставить
// отдельные переменные/константы:
let {account: {login, password}} =  user;
console.log(login);      // Tom
console.log(password);     // tom555


//---------------------------------------------------Оператор rest------------------------------------------------------
// rest-оператор или оператор ... позволяет получить оставшиеся свойства объекта, которые не сопоставлены с
// переменными/константами, в отдельную переменную/константу:
const tom = {
  name: "Tom",
  age: 24,
  phone: "+367438787",
  email: "tom@gmail.com"
};
const {name: userName2, age: userAge2, ...contacts} = tom;
console.log(userName2);      // Tom
console.log(userAge2);       // 24
console.log(contacts);  // {phone: "+367438787", email: "tom@gmail.com"}
// Стоит отметить, что переменная/константа, которая получает все оставшиеся свойства объекта, всегда будет представлять
// объект, даже если она получит только одно свойство из объекта.


//-----------------------------------------------Деструктуризация массивов----------------------------------------------
// Так же можно разложить массивы:
let users = ["Tom", "Sam", "Bob"];
let [a, b, c] = users;
console.log(a);     // Tom
console.log(b);     // Sam
console.log(c);     // Bob
// Если переменных/констант меньше, чем элементов массива, то оставшиеся элементы массива просто опускаются.
let [d, e] = users;
console.log(d);     // Tom
console.log(e);     // Sam
// Если переменных/констант больше, чем элементов массива, то несопоставленные переменные/константы получают значение
// undefined:
let [f, g, h, i] = users;
console.log(f);     // Tom
console.log(g);     // Sam
console.log(h);     // Bob
console.log(i);     // undefined

// Получение оставшихся элементов массива в другой массив:
// С помощью оператора ... можно получить все оставшиеся элементы массива в виде другого массива:
users = ["Tom", "Sam", "Bob", "Mike"];
let [tom2, ...others] = users;
console.log(tom2);       // Tom
console.log(others);    // ["Sam", "Bob", "Mike"]

// Пропуск элементов
let [first,,fourth] = users;
let [,second,third,] = users;
console.log(first);
console.log(fourth);
console.log(second);
console.log(third);


//---------------------------------------------Деструктуризация объектов из массивов------------------------------------
// Можно совместить получение данных из массива и объекта:
let people = [
  {name: "Tom", age: 34},
  {name: "Bob", age: 23},
  {name: "Sam", age: 32}
];
let [,{name: someName}] = people;

console.log(someName);      // Bob
// В данном случае получаем значение свойства name второго объекта в массиве.

//---------------------------------------------Деструктуризация параметров----------------------------------------------
// Если в функцию в качестве параметра передается массив или объект, то его также можно подобным образом разложить на
// отдельные значения:
function display({name:userName, age:userAge}){
  console.log(userName, userAge);
}
function sum([a, b, c]){
  const result = a + b + c;
  console.log(result);
}
user = {name:"Alice", age:33, email: "alice@gmail.com"};

let numbers = [3, 5, 7, 8];

display(user);  // Alice 33
sum(numbers);   // 15


//---------------------------------------------------Обмен значениями---------------------------------------------------
// Благодаря деструктуризации очень просто стало проводить обмен значениями между двумя переменными:
let frst = "Tom";
let scnd = "Bob";
[frst, scnd] = [scnd, frst];
// Что упрощает решение ряда задач. Например, используем деструктуризацию для простейшей сортировки массива:
let nums = [9, 3, 5, 2, 1, 4, 8, 6];
for(let i = 0; i < nums.length; i++)
  for(let j = 0; j < nums.length; j++)
    if (nums[i] < nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];

console.log(nums);  // [1, 2, 3, 4, 5, 6, 8, 9]
