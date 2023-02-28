/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

// РЕШЕНИЕ
const getLastDayOfMonth = function (year, month) {
  // берем след месяц и -1 день, чтобы получить последний день месяца
  // если параметр дней не задан, то по умолчанию будет 1
  // поэтому ставя 0 мы и получаем -1 день
  const date = new Date(year, month + 1, 0);
  return date.getDate();
};

console.log(getLastDayOfMonth(2012, 1)); // 29
