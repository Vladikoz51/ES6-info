// Одну из наиболее часто используемых событий составляют события мыши:
// click: возникает при нажатии указателем мыши на элемент
// mousedown: возникает при нахождении указателя мыши на элементе, когда кнопка мыши находится в нажатом состоянии
// mouseup: возникает при нахождении указателя мыши на элементе во время отпускания кнопки мыши
// mouseover: возникает при вхождении указателя мыши в границы элемента
// mousemove: возникает при прохождении указателя мыши над элементом
// mouseout: возникает, когда указатель мыши выходит за пределы элемента

// Например, обработаем события mouseover и mouseout:
function setColor(e) {
  if (e.type === "mouseover") {
    e.target.style.backgroundColor = "red";
  }
  else if (e.type === "mouseout") {
    e.target.style.backgroundColor = "blue";
  }
}
let blueRect = document.getElementById("blueRect");
blueRect.addEventListener("mouseover", setColor);
blueRect.addEventListener("mouseout", setColor);
// Теперь при наведении указателя мыши на блок blueRect он будет окрашиваться в красный цвет, а при уходе указателя мыши
// - блок будет обратно окрашиваться в синий цвет.

// Объект Event является общим для всех событий. Однако для разных типов событий существуют также свои объекты событий,
// которые добавляют ряд своих свойств. Так, для работы с событиями указателя мыши определен объект MouseEvent, который
// добавляет следующие свойства:
// altKey: возвращает true, если была нажата клавиша Alt во время генерации события
// button: указывает, какая кнопка мыши была нажата
// clientX: определяет координату Х окна браузера, на которой находился указатель мыши во время генерации события
// clientY: определяет координату Y окна браузера, на которой находился указатель мыши во время генерации события
// ctrlKey: возвращает true, если была нажата клавиша Ctrl во время генерации события
// metaKey: возвращает true, если была нажата во время генерации события метаклавиша клавиатуры
// relatedTarget: определяет вторичный источник возникновения события
// screenX: определяет координату Х относительно верхнего левого угла экрана монитора, на которой находился указатель
// мыши во время генерации события
// screenY: определяет координату Y относительно верхнего левого угла экрана монитора, на которой находился указатель
// мыши во время генерации события
// shiftKey: возвращает true, если была нажата клавиша Shift во время генерации события

// Определим координаты клика:
function handleClick(e){
  console.log("screenX: " + e.screenX);
  console.log("screenY: " + e.screenY);
  console.log("clientX: " + e.clientX);
  console.log("clientY: " + e.clientY);
}
blueRect.addEventListener("click", handleClick);  