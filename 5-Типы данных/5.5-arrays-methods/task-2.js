/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
ищет элементы со значениями больше или равными a и меньше или равными b и 
возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.
*/

// РЕШЕНИЕ

const filterRange = function (arr, a, b) {
  const result = [];
  for (const element of arr) {
    if (element >= a && element <= b) {
      result.push(element);
    }
  }
  return result;
};

// код прошел все тесты
