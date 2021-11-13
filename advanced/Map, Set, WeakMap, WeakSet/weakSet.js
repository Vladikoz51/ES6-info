// то же что и обычный set, но значениями weakSet могут являться только объекты
// ему доступны методы add, has, delete
const weakSet = new WeakSet();
obj1 = {name: 'Vladimir'};
obj2 = {name: 'Aliya'};
obj3 = {name: 'Darya'};
weakSet.add(obj1).add(obj2).add(obj3);
