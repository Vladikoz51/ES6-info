//---Методы массивов---

//---Методы изменяющие массив (добавление, удаление, и т.д.)------------------------------------------------------------

// метод pop() удаляет ПОСЛЕДНИЙ элемент из массива:
const arrPop = [1,2,3,4,5];
console.group("Метод pop()")
console.log("метод pop() удаляет последний элемент из массива");
console.log("Массив до удаления " + arrPop.toString());

arrPop.pop(); // arrPop.pop() возвращает удаленный элемент

console.log("Массив после удаления " + arrPop.toString());
console.groupEnd();

// метод push() добавляет новый элемент в КОНЕЦ массива:
const arrPush = [1,2,3,4,5];
console.group("Метод push()")
console.log("метод push() добавляет новый элемент в конец массива");
console.log("Массив до добавления " + arrPush.toString());

arrPush.push(6); // arrPop.push() возвращает новую длину массива

console.log("Массив после добавления " + arrPush.toString());
console.groupEnd();

// еще одним способом добавления элемента в конец массива является использование свойства length
arrPush[arrPush.length] = 7;

// метод shift() удаляет ПЕРВЫЙ элемент из массива:
const arrShift = [1,2,3,4,5];
console.group("Метод shift()")
console.log("метод shift() удаляет первый элемент из массива");
console.log("Массив до удаления " + arrShift.toString());

arrShift.shift(); // arrPop.shift() возвращает удаленный элемент

console.log("Массив после удаления " + arrShift.toString());
console.groupEnd();

// метод unshift() добавляет новый элемент в начало массива и сдвигает все остальные элементы вправо:
const arrUnshift = [1,2,3,4,5];
console.group("Метод unshift()")
console.log("метод unshift() добавляет новый элемент в начало массива и сдвигает все остальные элементы вправо");
console.log("Массив до добавления " + arrUnshift.toString());

arrUnshift.unshift(10); // arrUnshift.unshift() возвращает новую длину массива

console.log("Массив после добавления " + arrUnshift.toString());
console.groupEnd();

// метод splice() добавляет или удаляет элементы массива по заданному индексу
const arrSplice = ["Банан", "Киви", "Яблоко"];
// в данном примере мы добавим два элемента перед элементом с индексом 1
console.group("Метод splice()")
console.log("метод splice() добавляет или удаляет элементы массива по заданному индексу");
console.log("Массив до добавления " + arrSplice.toString());

arrSplice.splice(1,0,"Помидор", "Огурец"); // arrSplice.splice() возвращает массив с удаленными элементами

console.log("Массив после добавления " + arrSplice.toString());
console.log("");
// в данном примере мы удалим два первых элемента массива
console.log("Массив до удаления " + arrSplice.toString());

arrSplice.splice(0,2); // arrSplice.splice() возвращает массив с удаленными элементами

console.log("Массив после удаления " + arrSplice.toString());
console.groupEnd();

// метод concat() создает новый массив путем соединения двух массивов:
const arrBoys = ["Vova", "Sergey", "Mikhail"];
const arrGirls = ["Aliya", "Marina", "Rosa"];
console.group("Метод concat()")
console.log("метод concat() создает новый массив путем соединения двух массивов:");
console.log("Массив arrBoys " + arrBoys.toString());
console.log("Массив arrGirls " + arrGirls.toString());

const arrPeople = arrBoys.concat(arrGirls);

console.log("Массив arrPeople " + arrPeople.toString());
console.groupEnd();

// метод slice() копирует часть существующего массива в новый массив:
const arrFruits = ["Banana", "Lemon", "Orange", "Apple"];
console.group("Метод slice()")
console.log("метод slice() копирует часть существующего массива в новый массив:");
console.log("Массив arrFruits " + arrFruits.toString());

const arrCitrus = arrFruits.slice(1,3); // в этом примере мы копируем часть массива с индекса 1 (включительно) по
// индекс 3 (не включительно) итого 2 элемента
console.log("Массив arrCitrus " + arrCitrus.toString());
console.groupEnd();
