/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, 
пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

const sumInput = function () {
  let array = [];
  let num = 0;
  while (isFinite(num)) {
    num = prompt("Введите число");
    if (isFinite(num)) array.push(+num);
    if (!isFinite(num) || num === "" || num === null) break;
    console.log(array);
  }

  return array.reduce((value, current) => (value += current), 0);
};
