// экспорт переменной
export let welcome = "Welcome";

// экспорт константы
export const hello = "Hello";

export function sayHello() {
  console.log("Hello METANIT.COM");
}
// Здесь определена обычная функция sayHello(), которая выводит некоторое сообщение на консоль. Но она определена с
// ключевым словом export, а это значит, что данный файл представляет модуль, а функцию sayHello() можно импортировать в
// другие модули.

// экспорт по умолчанию
export default function sayHello2() {
  console.log("Hello METANIT.COM");
}

// экспорт класса
export class Messenger {
  send(text){
    console.log("Sending message:", text);
  }
}

// Стоит отметить, что нам необязательно экспортировать все компоненты модуля, какие-то компоненты мы можем не
// экспортировать и использовать только внутри этого модуля.
// В качестве альтернативы мы могли бы экспортировать все компоненты вместе виде списка:
// export {welcome, hello, sayHello, Messenger}

// Экспорт с использованием псевдонимов
// export {welcome as simpleMessage, hello, sayHello as printMessage, Messenger}

// В данном случае оба способа экспорта будут эквивалентны.