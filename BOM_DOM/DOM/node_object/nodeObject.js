// Каждый отдельный узел, будь то html-элемент, его атрибут или текст, в структуре DOM представлен объектом Node. Этот
// объект предоставляет ряд свойств, с помощью которых мы можем получить информацию о данном узле:
// childNodes: содержит коллекцию дочерних узлов
// firstChild: возвращает первый дочерний узел текущего узла
// lastChild: возвращает последний дочерний узел текущего узла
// previousSibling: возвращает предыдущий элемент, который находится на одном уровне с текущим
// nextSibling: возвращает следующий элемент, который находится на одном уровне с текущим
// ownerDocument: возвращает корневой узел документа
// parentNode: возвращает элемент, который содержит текущий узел
// nodeName: возвращает имя узла
// nodeType: возвращает тип узла в виде числа
// nodeValue: возвращает или устанавливает значение узла в виде простого текста

// Переберём все дочерние узлы элемента:
let articleDiv = document.querySelector("div.article");
let nodes = articleDiv.childNodes;
for(let i = 0; i < nodes.length; i++) {
  let type = "";
  if(nodes[i].nodeType === 1) {
    type = "элемент";
  }
  else if(nodes[i].nodeType === 2) {
    type = "атрибут";
  }
  else if(nodes[i].nodeType === 3) {
    type = "текст";
  }
  console.log(nodes[i].nodeName + ": " + type);
}

// Но несмотря на то, что в блоке div на странице только три узла: h3 и 2 параграфа, но консоль отобразит нам семь
// узлов.
// #text: текст
// H3: элемент
// #text: текст
// P: элемент
// #text: текст
// P: элемент
// #text: текст

// Дело в том, что пробелы между узлами также считаются за отдельные текстовые узлы, если бы пробелов не было то при
// переборе мы бы обнаружили только три дочерних узла, как и ожидалось.


//------------------------------------------------Навигация по узлам----------------------------------------------------
// Используя свойства nextSibling и previousSibling можно также пройтись по узлам в прямом или обратном порядке.
// Например, для прохода по элементам на той же станице мы могли бы использовать следующий код javascript:
articleDiv = document.querySelector("div.article");
// получаем первый дочерний элемент
let node = articleDiv.firstChild;
console.log(node.nodeName);
// обращаемся к следующему узлу, пока он определен
while ((node = node.nextSibling) !== null) {
  console.log(node.nodeName);
}