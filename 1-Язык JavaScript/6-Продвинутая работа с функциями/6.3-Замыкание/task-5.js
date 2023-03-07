/*
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
*/

// РЕШЕНИЕ
const inBetween = function (a, b) {
  return function (value) {
    return value >= a && value <= b;
  };
};

const inArray = function (array) {
  return function (value) {
    return array.includes(value);
  };
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.filter(inBetween(3, 6)));
console.log(array.filter(inArray([1, 2, 3])));

// код прошел все тесты
