// Объект location содержит информацию о расположении текущей веб-страницы: URL, информацию о сервере, номер порта,
// протокол. С помощью свойств объекта мы можем получить эту информацию:
// href: полная строка запроса к ресурсу
// pathname: путь к ресурсу
// origin: общая схема запроса
// protocol: протокол
// port: порт, используемый ресурсом
// host: хост
// hostname: название хоста
// hash: если строка запроса содержит символ решетки (#), то данное свойство возвращает ту часть строки, которая идет
// после этого символа
// search: если строка запроса содержит знак вопроса (?), например, то данное свойство возвращает ту часть строки,
// которая идет после знака вопроса

document.write("Строка запроса: " + location.href + "<br />");
document.write("Путь к ресурсу: " + location.pathname + "<br />");
document.write("Схема: " + location.origin + "<br />");
document.write("Протокол: " + location.protocol + "<br />");
document.write("Порт: " + location.port + "<br />");
document.write("Хост: " + location.host + "<br />");
document.write("Имя хоста: " + location.hostname + "<br />");
document.write("Хэш: " + location.hash + "<br />");
document.write("Поиск: " + location.search + "<br />");

// Также объект location предоставляет ряд методов, которые можно использовать для управления путем запроса:
// assign(url): загружает ресурс, который находится по пути url
// reload(forcedReload): перезагружает текущую веб-страницу. Параметр forcedReload указывает, надо ли использовать кэш
// браузера. Если параметр равен true, то кэш не используется
// replace(url): заменяет текущую веб-станицу другим ресурсом, который находится по пути url. В отличие от метода
// assign, который также загружает веб-станицу с другого ресурса, метод replace не сохраняет предыдущую веб-страницу в
// стеке истории переходов history, поэтому мы не сможем вызвать метод history.back() для перехода к ней.

// Для перенаправления на другой ресурс мы можем использовать как свойства, так и методы location:
location = "http://google.com";
// аналогично
// location.href = "http://google.com";
// location.assign("http://google.com");

// Переход на другой локальный ресурс:
location.replace("index.html");