// Среди функций отдельно можно выделить рекурсивные функции. Их суть состоит в том, что функция вызывает саму себя.
// Например, рассмотрим функцию, определяющую факториал числа:
function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  else {
    return n * getFactorial(n - 1);
  }
}
let result = getFactorial(4);
console.log(result); // 24

// Рассмотрим другой пример - определение чисел Фибоначчи:
function getFibonachi(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  else{
    return getFibonachi(n - 1) + getFibonachi(n - 2);
  }
}
var result = getFibonachi(8); //21
console.log(result); // 21