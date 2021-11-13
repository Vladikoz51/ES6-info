// Кроме методов и свойств объекта Node в JavaScript мы можем использовать свойства и методы объектов Element. Важно не
// путать эти два объекта: Node и Element. Node представляет все узлы веб-страницы, в то время как объект Element
// представляет непосредственно только html-элементы. То есть объекты Element - это фактически те же самые узлы -
// объекты Node, у которых тип узла (свойство nodeType) равно 1.

//---------------------------------------------Свойства innerText и innerHTML-------------------------------------------
// Для получения или установки текстового содержимого элемента мы можем использовать свойство innerText, а для получения
// или установки кода html - свойство innerHTML:
let articleDiv = document.querySelector("div.article");
console.log(articleDiv.innerText);
console.log("_______________________");
console.log(articleDiv.innerHTML);

// Надо отметить, что свойство innerText во многом аналогично свойству textContent. То есть следующие вызовы будут
// равноценны:
let pElement = document.querySelectorAll("div.article p")[0];
pElement.innerText = "hello";
pElement.textContent = "hello";

// Установка кода html у элемента:
articleDiv.innerHTML ="<h2>Hello World!!!</h2><p>bla bla bla</p>";


//---------------------------------------Методы управления атрибутами---------------------------------------------------
// Среди методов объекта Element можно отметить методы управления атрибутами:
// getAttribute(attr): возвращает значение атрибута attr
// setAttribute(attr, value): устанавливает для атрибута attr значение value. Если атрибута нет, то он добавляется
// removeAttribute(attr): удаляет атрибут attr и его значение
// получаем атрибут style
let styleValue = articleDiv.getAttribute("style");
console.log("До изменения атрибута: " + styleValue);
// удаляем атрибут
articleDiv.removeAttribute("style");
// добавляем заново атрибут style
articleDiv.setAttribute("style", "color:blue;");
styleValue = articleDiv.getAttribute("style");
console.log("После изменения атрибута: " + styleValue);