/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

// РЕШЕНИЕ

// интервал
const printNumbersInterval = function (from, to) {
  let print = setInterval(function () {
    console.log(from);
    if (from === to) {
      clearInterval(print);
    }
    from++;
  }, 1000);
};

printNumbersInterval(1, 5);

// таймаут
function printNumbersTimeOut(from, to) {
  setTimeout(function print() {
    console.log(from);
    if (from < to) {
      setTimeout(print, 1000);
    }
    from++;
  }, 1000);
}
printNumbersTimeOut(1, 5);
