// Fetch API позволяет браузеру делать HTTP запрос на сервер

// В данной переменной сохранена ссылка которая ведет на страницу с данными в формате JSON
const reqURL = "https://jsonplaceholder.typicode.com/users";

//---XMLHttpRequest---------------------------------------------------------------------------------------------
// Для начала рассмотрим старый метод получение информации с сервера который называется XHR (XMLHTTPRequest)

// const xhr = new XMLHttpRequest(); // Создаем новый XHR объект
// xhr.open('GET', reqURL); // открываем новое соединение, в первым аргументов указываем метод http запроса, а вторым наш url
// // с сервера должен прийти ответ в теле которого будет строка, содержащая JSON объекты, чтобы ответ был в формате JSON
// // нужно указать тип ответа, чтобы автоматически распарсить строку, либо сделать это самому вызвав метод JSON.parse()
// // после получения ответа
// xhr.responseType = 'json';
//
// // определим метод который запустится после того как ответ с сервера будет загружен
// xhr.onload = () => {
//     if (xhr.status >= 400) { // если статус запроса больше либо равен 400 значит произошла ошибка
//         console.error(xhr.response);
//     }
//     else {
//         console.log(xhr.response);
//     }
// }
// // определим метод который запустится в случае если сервер вернет ошибку
// xhr.onerror = () => {console.log(xhr.response);}
//
//
// // отправляем наш запрос на сервер
// xhr.send();


// Перепишем все вышеописанное в рамках одной функции, эту функцию также можно использовать для отправки данных на
// сервер, поэтому добавлен третий параметр body т.е тело запроса.
// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//
//         xhr.responseType = "json";
//         // в случае если мы отправляем данные на сервер то в заголовке запроса нужно указать тип отправляемых данных
//         // (по умолчанию text/plain), первым аргументом указывается имя заголовка а вторым значение.
//         xhr.setRequestHeader("Content-Type", "application/json");
//
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             }
//             else {
//                 resolve(xhr.response);
//             }
//         }
//         xhr.onerror = () => {
//             reject(xhr.response);
//         }
//         // в случае отправки данных на сервер методом POST мы просто передаем данные как аргумент методу send, но по
//         // сети данные пересылаются в виде текста поэтому надо преобразовать нащ JS объект в JSON строку
//         //
//         xhr.send(JSON.stringify(body));
//     })
// }
//
// const req = sendRequest("GET", reqURL);
// req.then((data) => console.log(data))
//     .catch(err => console.error(err));
//
// // Теперь с помощью нашего метода отправим данные
// sendRequest("POST", reqURL, {name: "Vladimir", age: 33})
//     .then(data => console.log(data))
//     .catch(err => console.error(err));



//---Метод fetch--------------------------------------------------------------------------------------------------------

// Перепишем метод sendRequest указанный выше с помощью fetch

function sendRequest(method, url, body = null) {
    const headers = {
      "Content-Type": "application/json"
    };

    // Метод fetch принимает имеет два параметра url и init, параметр init представляет собой объект который содержит все
    // остальные параметры запроса. fetch возвращает промис, данные при загрузке сохраняются в поток Readable Stream, метод text() читает все
    // данные из потока и возвращает промис с данными в виде строки (метод json работает аналогично но при этом
    // преобразует строку в формате JSON в JS объекты).

    // В данном случае в объекте init мы определяем метод запроса, тело запроса, и объект headers который хранит в себе
    // заголовки шапки запроса
    return fetch(url, {method: method, body: body, headers: headers})
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                response.json().then(err => {
                    const e = new Error("Что-то пошло не так");
                    e.data = err;
                    throw e;
                })
            }
        });
}

// Запросим данные с сервера при помощи метода GET
sendRequest("GET", reqURL).then(data => console.log(data)).catch(err => console.log(err));

// Отправим данные на сервер при помощи метода POST
sendRequest("POST", reqURL,
    JSON.stringify({name: "Vladimir", age: 33}))
    .then(data => console.log(data))
    .catch(err => console.log(err));

