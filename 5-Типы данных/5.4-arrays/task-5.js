/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
*/

// идея: раз ищем непрерывный подмассив с макс суммой,
// то при сумме меньше 0, присваиваем сумме ноль и продолжаем прохождение по массиву

const getMaxSubSum = function (arr) {
  let arrayOfSums = [];
  let sum = 0;
  for (const element of arr) {
    sum += element;
    if (sum < 0) {
      sum = 0;
    } else arrayOfSums.push(sum);
  }

  arrayOfSums.push(sum);
  return Math.max(...arrayOfSums);
};

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);

// код прошел все тесты в песочнице
