/*
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), 
которая вернёт массив уникальных, не повторяющихся значений массива arr.
*/

// РЕШЕНИЕ
// абсолютно такое же как в 5.5 решение
const unique = function (arr) {
  return [...new Set(arr)];
};
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O

// все тесты пройдены в песочнице
