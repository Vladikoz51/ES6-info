// Объект navigator содержит информацию о браузере и операционной системе, в которой браузер запущен. Он определяет ряд
// свойств и методов, основным из которых является свойство userAgent, представляющее браузер пользователя:
document.write(navigator.userAgent);

// Данное свойство хранит полную стоку юзер-агента, например, Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36
// (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36
// Чтобы вычленить из этой информации непосредственно браузер, можно попробовать найти в этой информации название
// браузера:
let browser, uAgent = navigator.userAgent;
if(uAgent.indexOf("Chrome") > -1) {
  browser = "Google Chrome";
} else if (uAgent.indexOf("Safari") > -1) {
  browser = "Apple Safari";
} else if (uAgent.indexOf("Opera") > -1) {
  browser = "Opera";
} else if (uAgent.indexOf("Firefox") > -1) {
  browser = "Mozilla Firefox";
} else if (uAgent.indexOf("MSIE") > -1) {
  browser = "Microsoft Internet Explorer";
}
document.write('<br>' + browser);


//-----------------------------------------------Свойство geolocation---------------------------------------------------
// Объект navigator хранит свойство geolocation, с помощью которого можно получить географическое положение
// пользователя. Для получения положения используется метод getCurrentPosition(). Этот метод принимает два параметра:
// функцию, которая срабатывает при удачном запуске, и функцию, которая срабатывает при ошибке запроса геоданных:
function success(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let altitude = position.coords.altitude;
  let speed = position.coords.speed;

  document.write("Широта: " + latitude + "<br/>");
  document.write("Долгота: " + longitude + "<br/>");
  document.write("Высота: " + altitude + "<br/>");
  document.write("Скорость перемещения: " + speed + "<br/>");
}

function error(obj) {
  document.write("Ошибка при определении положения");
}
navigator.geolocation.getCurrentPosition(success, error);

// В функцию, которая выполняется при удачном определении геоданных, передается позиция пользователя в виде параметра
// position. Передаваемый объект имеет вложенный объект coords, с помощью свойство которого можно получить
// непосредственные координаты пользователя:
// latitude: географическая широта
// longitude: географическая долгота
// altitude: высота
// speed: скорость, с которой перемещается пользователь (например, если он идет или перемещается на транспорте)

// При этом надо учитывать, что в браузерах действует политика безопасности, которая при обращении к методу
// geolocation.getCurrentPosition() отображает пользователю сообщение, в котором пользователь может подтвердить отправку
// географических координат. Если же пользователь откажется, то будет срабатывать функция error().