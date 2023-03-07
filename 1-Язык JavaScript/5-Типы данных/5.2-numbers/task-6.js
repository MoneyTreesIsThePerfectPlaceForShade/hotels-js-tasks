/*
Напишите функцию randomInteger(min, max), 
которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.
*/
// РЕШЕНИЕ
// как и прежде, но уже включительно и целое число
// через trunc откидываем дробь, умножаем на max(т.к. включительно) и прибавляем min
const randomInteger = (min, max) => Math.trunc(Math.random() * max + min);
// тесты
console.log("---1-6---");
console.log(randomInteger(1, 6));
console.log(randomInteger(1, 6));
console.log(randomInteger(1, 6));
console.log(randomInteger(1, 6));
console.log("---1-10---");
console.log(randomInteger(1, 10));
console.log(randomInteger(1, 10));
console.log(randomInteger(1, 10));
console.log(randomInteger(1, 10));
console.log("---0-2---");
console.log(randomInteger(0, 2));
console.log(randomInteger(0, 2));
console.log(randomInteger(0, 2));
console.log(randomInteger(0, 2));
