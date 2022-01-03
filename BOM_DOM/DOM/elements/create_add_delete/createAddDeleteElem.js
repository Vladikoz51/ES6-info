//----------------------------------------------Создание элемента-------------------------------------------------------
// Для создания элементов объект document имеет следующие методы:

// createElement(elementName): создает элемент html, тег которого передается в качестве параметра. Возвращает созданный
// элемент.
let elem = document.createElement("div");
// createTextNode(text): создает и возвращает текстовый узел. В качестве параметра передается текст узла.
let elemText = document.createTextNode("Привет мир");
// Таким образом, переменная elem будет хранить ссылку на элемент div. Однако одного создания элементов недостаточно,
// их еще надо добавить на веб-страницу.

// Для добавления элементов мы можем использовать один из методов объекта Node:
// appendChild(newNode): добавляет новый узел newNode в конец коллекции дочерних узлов
elem.appendChild(elemText);
document.body.appendChild(elem);
// insertBefore(newNode, referenceNode): добавляет новый узел newNode перед узлом referenceNode


//---------------------------------------------Копирование элемента-----------------------------------------------------
// Иногда элементы бывают довольно сложными по составу, и гораздо проще их скопировать, чем с помощью отдельных вызовов
// создавать из содержимое. Для копирования уже имеющихся узлов у объекта Node можно использовать метод cloneNode():
let clonedElem = elem.cloneNode(true);
document.body.appendChild(clonedElem);
// В метод cloneNode() в качестве параметра передается логическое значение: если передается true, то элемент будет
// копироваться со всеми дочерними узлами; если передается false - то копируется без дочерних узлов. То есть в данном
// случае мы копируем узел со всем его содержимым и потом добавляем в конец элемента body.


//-----------------------------------------------Удаление элемента------------------------------------------------------
// Для удаления элемента вызывается метод removeChild() объекта Node. Этот метод удаляет один из дочерних узлов:
let div = document.querySelector("div");
document.body.removeChild(div);


//-----------------------------------------------Замена элемента--------------------------------------------------------
// Для замены элемента применяется метод replaceChild(newNode, oldNode) объекта Node. Этот метод в качестве первого
// параметра принимает новый элемент, который заменяет старый элемент oldNode, передаваемый в качестве второго
// параметра.
let newDiv = document.createElement("div");
newDiv.innerText = 'Привет, о дивный новый мир!!!';
document.body.replaceChild(newDiv,clonedElem);