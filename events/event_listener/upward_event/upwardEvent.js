//---------------------------------------------Распространение событий--------------------------------------------------
// Когда мы нажимаем на какой-либо элемент на станице и генерируется событие нажатия, то это событие может
// распространяться от элемента к элементу. Например, если мы нажимаем на блок div, то также мы нажимаем и на элемент
// body, в котором блок div находится. То есть происходит распространение события.

// Есть несколько форм распространения событий:
// Восходящие: событие распространяется вверх по дереву DOM от дочерних узлов к родительским
// Нисходящие: событие распространяется вниз по дереву DOM от родительских узлов к дочерним, пока не достигнет того
// элемента, на котором это событие и возникло.


// Восходящие события
// Рассмотрим восходящие (bubbling) события, которые распространяются в верх по дереву DOM. Допустим, у нас есть
// следующая веб-страница (см. upward_event.html)
let redRect = document.getElementById("redRect");
redRect.addEventListener("click", function(){
  console.log("Событие на redRect");
});

let blueRect = document.getElementById("blueRect");
blueRect.addEventListener("click", function(){
  console.log("Событие на blueRect");
});

document.body.addEventListener("click", function(){
  console.log("Событие на body");
});

// Если мы нажмем на вложенный div, то событие пойдет к родительскому элементу div и далее к элементу body. Надо
// сказать, что подобное поведение не всегда является желательным. И в этом случае мы можем остановить распространение
// события с помощью метода stopPropagation() объекта Event:
let greenRect = document.getElementById('greenRect');
greenRect.addEventListener('click', function (e) {
  console.log('Событие на greenRect');
  e.stopPropagation();
});

let yellowRect = document.getElementById('yellowRect');
yellowRect.addEventListener('click', function () {
  console.log('Событие на yellowRect');
});

