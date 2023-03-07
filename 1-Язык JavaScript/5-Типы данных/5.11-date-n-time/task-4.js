/*
Создайте функцию getDateAgo(date, days), возвращающую число, 
которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) 
вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
*/

// РЕШЕНИЕ
const getDateAgo = function (date, days) {
  // может через чур сложно, но решил именно так
  // конвертирую дату в число в мс, вычитаю дни в мс
  const dateNum = new Date(date.getTime() - days * 24 * 3600 * 1000);
  // достаю число из даты
  return dateNum.getDate();
};

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
