// Для работы со слушателями событий в JavaScript есть объект EventTarget, который определяет методы addEventListener()
// (для добавления слушателя) и removeEventListener() для удаления слушателя. И поскольку html-элементы DOM тоже
// являются объектами EventTarget, то они также имеют эти методы. Фактически слушатели представляют те же функции
// обработчиков.

// Метод addEventListener() принимает два параметра: название события без префикса on и функцию обработчика этого
// события. Например:
let rect = document.querySelector("#rect");
rect.addEventListener("click", function (e) {
  alert(e.type);
});
// То есть в данном случае обрабатывается событие click. И также можно было бы в качестве второго параметра название
// функции:
function handler(e) {
  alert(e.type);
}
rect.addEventListener("click", handler);


// Удаление слушателя аналогично добавлению:
rect.removeEventListener("click", handler);

// Преимуществом использования слушателей является и то, что мы можем установить для одного события несколько функций:
let clicks = 0;
function handlerOne(e) {
  alert(e.type);
}
function handlerTwo(e) {
  clicks++;
  let newNode = document.createElement("p");
  newNode.textContent = "произошло нажатие " + clicks;
  document.body.appendChild(newNode);
}
rect = document.getElementById("rect2");
// прикрепляем первый обработчик
rect.addEventListener("click", handlerOne);
// прикрепляем второй обработчик
rect.addEventListener("click", handlerTwo);


//---------------------------------------------Свойства объекта Event---------------------------------------------------
// При обработке события браузер автоматически передает в функцию обработчика в качестве параметра объект Event, который
// инкапсулирует всю информацию о событии. И с помощью его свойств мы можем получить эту информацию:

// bubbles: возвращает true, если событие является восходящим. Например, если событие возникло на вложенном элементе, то
// оно может быть обработано на родительском элементе.
// cancelable: возвращает true, если можно отменить стандартную обработку события
// currentTarget: определяет элемент, к которому прикреплен обработчик события
// defaultPrevented: возвращает true, если был вызван у объекта Event метод preventDefault()
// eventPhase: определяет стадию обработки события
// target: указывает на элемент, на котором было вызвано событие
// timeStamp: хранит время возникновения события
// type: указывает на имя события

function handler3(event) {
  console.log('Событие восходящее: ' + event.bubbles);
  console.log('Событие отменяемое: ' + event.cancelable);
  console.log('Элемент DOM: ' + event.currentTarget);
  console.log('Вызван метод preventDefault: ' + event.defaultPrevented);
  console.log('Стадия обработки события: ' + event.eventPhase);
  console.log('Элемент на котором вызвано события: ' + event.target);
  console.log('Время возникновения события: ' + event.timeStamp);
  console.log('Имя события: ' + event.type);
}
rect = document.querySelector('#rect3');
rect.addEventListener('click', handler3);


//--------------------------------------------Остановка выполнения события----------------------------------------------
// С помощью метода preventDefault() объекта Event мы можем остановить дальнейшее выполнение события. В ряде случаев
// этот метод не играет большой роли. Однако в некоторых ситуаций он может быть полезен. Например, при нажатии на ссылку
// мы можем с помощью дополнительной обработки определить, надо ли переходить по ссылке или надо запретить переход. Или
// другой пример: пользователь отправляет данные формы, но в ходе обработки в обработчике события мы определили, что
// поля формы заполнены неправильно, и в этом случае мы также можем запретить отправку.
function linkHandler(e){
  let date = new Date();
  let hour = date.getHours();
  console.log(hour);
  if (hour > 12) {
    e.preventDefault();
    document.write("После 12 переход запрещен");
  }
}
let link = document.querySelector('#link');
link.addEventListener('click', linkHandler);
