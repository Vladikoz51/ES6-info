// С помощью оператора typeof можно получить тип переменной:
let id;
console.log(typeof id);       // undefined
id = 45;
console.log(typeof id);   // number
id = 45n;
console.log(typeof id);     // bigint
id = "45";
console.log(typeof id);     // string

// Стоит отметить, что для значения null оператор typeof возвращает значение "object", несмотря на то, что согласно
// спецификации JavaScript значение null представляет отдельный тип.
id = null;
console.log(typeof id);     // string
