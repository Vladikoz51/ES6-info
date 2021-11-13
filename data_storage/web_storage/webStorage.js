// Хотя куки позволяют сохранять информацию, они имеют ряд ограничений. Например, браузер имеет ограничения на размер
// куков - каждая кука не может превышать 4 кб. Куки имеют срок действия, после которого удаляются. Куки являются
// неотъемлемой чертой протокола HTTP и при каждом запросе к серверу передаются вместе с запросом на сервер. Однако для
// работы с куками на стороне клиента в коде javascript не имеет значения передача куков на сервер. Кроме того, для
// извлечения сохраненных куков надо написать некоторую порцию кода.
// Поэтому в HTML5 была внедрена новая концепция для хранения данных - web storage. Web storage состоит из двух
// компонентов: session storage и local storage.
// Все данные в web storage представляют набор пар ключ-значение. То есть каждый объект имеет уникальное имя-ключ и
// определенное значение.
// Для работы с local storage в javascript используется объект localStorage, а для работы с session storage - объект
// sessionStorage.


//-----------------------------------------------sessionStorage---------------------------------------------------------
// Session storage представляет временное хранилище информации, которая удаляется после закрытия браузера.

// Для сохранения данных надо передать в метод setItem() объекта sessionStorage:
sessionStorage.setItem("login", "tom32@gmail.com");
// В этот метод передаются два значения: ключ и значение сохраняемого объекта, если в sessionStorage уже есть объект с
// ключом "login", то его значение заменяется новым.

// Для получения сохраненных данных надо вызвать метод getItem():
let login = sessionStorage.getItem("login"); //tom32@gmail.com

// Чтобы удалить объект, применяется метод removeItem(), который принимает ключ удаляемого объекта:
sessionStorage.removeItem("login");

// И для полного удаления всех объектов из localStorage можно использовать метод clear():
sessionStorage.clear();


// С сохранением простых объектов все просто, однако при этом надо учитывать, что данные в sessionStorage сохраняются в
// виде строки:
sessionStorage.setItem("age", 23);
let age = sessionStorage.getItem("age");
age = parseInt(age) + 10;
document.write(age); //33
// Если в данном случае не преобразовать значение к числу с помощью parseInt(), то age будет действовать как строка.

// Трудности могут возникнуть с сохранением сложных объектов:
let user ={
  name: "Tom",
  age: 23,
  married: false
};
sessionStorage.setItem("user", user);
let savedUser = sessionStorage.getItem("user");
document.write(savedUser); //[object Object]
document.write(savedUser.name); // undefined - savedUser - строка, а не объект
// В этом случае нам надо использовать сериализацию в формат JSON:
sessionStorage.setItem("user", JSON.stringify(user));
savedUser = JSON.parse(sessionStorage.getItem("user"));
document.write(savedUser.name + " " + savedUser.age +" " + savedUser.married); // Tom 23 false

//-----------------------------------------------Local storage----------------------------------------------------------
// Local storage представляет хранилище для данных на постоянной основе. Данные из local storage автоматически не
// удаляются и не имеют срока действия. Эти данные не передаются на сервер в запросе HTTP. Кроме того, объем local
// storage составляет в Chrome и Firefox 5 Mб для домена, а в IE - 10 Mб.

// Все что написано выше для sessionStorage работает аналогично и для localStorage.