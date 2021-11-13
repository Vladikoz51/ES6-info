const http = require("http");
const fs = require("fs");

http.createServer(function(request, response) {
  // получаем путь после слеша
  let filePath = request.url.substr(1);
  if(filePath === "") {
    filePath = "index.html";
  }
  fs.readFile(filePath, function(error, data) {
    if (error) {
      response.statusCode = 404;
      response.end("Resource not found!");
    }
    else {
      if (filePath.endsWith(".js")) {
        response.setHeader("Content-Type", "text/javascript");
      }
      response.end(data);
    }
  });
}).listen(3000, function() {
  console.log("Server started at 3000");
});

// Это самый примитивный сервер, который отдает пользователю статические файлы. Для создания сервера применяется функция
// http.createServer(), а для считывания и отправки файлов - функция fs.readFile(). Если имя файла не указано, то
// отправляется файл index.html. Сервер будет запускаться по адресу http://localhost:3000/

// Стоит отметить, что при отправке модулей js нам надо устанавливать mime-тип отправляемого контента в
// "text/javascript".

// Теперь запустим сервер с помощью команды
// node server.js
// После запуска сервера мы можем перейти в браузере по адресу http://localhost:3000, нам отобразится страница, а в
// консоли браузера мы сможем увидеть результат работы модуля main.js.
