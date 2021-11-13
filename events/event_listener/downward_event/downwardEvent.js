// // Когда мы нажимаем на какой-либо элемент на станице и генерируется событие нажатия, то это событие может
// // распространяться от элемента к элементу. Например, если мы нажимаем на блок div, то также мы нажимаем и на элемент
// // body, в котором блок div находится. То есть происходит распространение события.
//
// // Есть несколько форм распространения событий:
// // Восходящие: событие распространяется вверх по дереву DOM от дочерних узлов к родительским
// // Нисходящие: событие распространяется вниз по дереву DOM от родительских узлов к дочерним, пока не достигнет того
// // элемента, на котором это событие и возникло.

// События также могут быть нисходящими (capturing). Для их использования в метод addEventListener() в качестве третьего
// необязательного параметра передается логическое значение true или false, которое указывает, будет ли событие
// нисходящим. По умолчанию все события восходящие.

let redRect = document.getElementById("redRect");
redRect.addEventListener("click", function(){
  console.log("Событие на redRect");
}, true);

let blueRect = document.getElementById("blueRect");
blueRect.addEventListener("click", function(){
  console.log("Событие на blueRect");
}, true);

document.body.addEventListener("click", function(){
  console.log("Событие на body");
}, true);

// Теперь события будут распространяться в обратном порядке: