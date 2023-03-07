/*
Напишите функцию filterRangeInPlace(arr, a, b), 
которая принимает массив arr и удаляет из него все значения кроме тех, 
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
*/

// РЕШЕНИЕ
const filterRangeInPlace = function (arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

const c = filterRangeInPlace([5, 3, 8, 1], 2, 5); // 5,3
console.log(c);

// тесты прошел
