// import {sayHello} from "./message.js";
// sayHello();

// импорт по умолчанию
import sayHello2 from "./message.js";
sayHello2();

// импорт всего модуля целиком
import * as messageModule from './message';

messageModule.sayHello(); // вызов метода из модуля
const telegram = new messageModule.Messenger(); // создаем объект класса Messenger из модуля messageModule
telegram.send(messageModule.welcome); // используем в методе send переменную welcome модуля messageModule


// Можно указать псевдонимы и при импорте. Это может быть актуально, если имя импортируемого компонента довольно велико,
// и мы хотим установить для него более краткий псевдоним. Вторая причина: в модуле уже есть компоненты с таким именем,
// и чтобы избежать двойственности для одноименных компонентов подключаемого модуля устанавливаются псевдонимы. Третья
// причина - мы хотим дать компонентам более описательные выразительные имена.
// import {simpleMessage as messageText, printMessage as printHello, Messenger} from "./message.js";