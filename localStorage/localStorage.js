// это локальное хранилище данных на стороне браузера (в node.js не работает), представляет собой свойство объекта
// window (можно обратиться через консоль браузера window.localStorage), для каждого домена существует свой localStorage

//----Методы----------
//метод getItem позволяет получить значение пары ключ-значение по ключу
console.log(localStorage.getItem("age")); // будет null потому что мы не сохраняли туда такое значение

//метод setItem позволяет сохранить пару ключ-значение в локальное хранилище (пары ключ-значение должны быть строковом
// формате, так как localStorage умеет работать только со строкой, нестроковые значения будут приведены к строке)
localStorage.setItem('name', 'Vladimir');
console.log(localStorage.getItem('name'));

// метод removeItem удаляет пару ключ-значение из localStorage
localStorage.removeItem('name');
console.log(localStorage.getItem('name'));

// метод clear удаляет все элементы из localStorage
localStorage.setItem('name', 'John');
localStorage.setItem('age', '25');
localStorage.setItem('city', 'New York');
console.log(localStorage);
localStorage.clear();
console.log(localStorage);

//---особенности работы с localStorage----
// в localStorage нельзя записать объект в за качестве значения напрямую
let obj = {name: 'Vladimir', age: 33, city: 'Ufa'};
// localStorage.setItem('person', obj); // в результате значение будет [object Object]
// поэтому объект нужно трансформировать в JSON
localStorage.setItem('person', JSON.stringify(obj));
// чтобы получить объект из localStorage нужно извлечь JSON и распарсить в объект
obj = JSON.parse(localStorage.getItem('person'));
console.log(obj);

// для localStorage можно добавить слушатель событий
window.addEventListener('storage', event => console.log(event));

