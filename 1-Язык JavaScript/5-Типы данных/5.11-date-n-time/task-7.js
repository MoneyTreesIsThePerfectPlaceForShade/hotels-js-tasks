/*
Создайте функцию getSecondsToTomorrow(), 
возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. 
в ней не должно быть конкретного значения сегодняшней даты.
*/

// РЕШЕНИЕ
const getSecondsToTomorrow = function () {
  const currenDate = new Date();

  const nextDate = new Date(
    currenDate.getFullYear(),
    currenDate.getMonth(),  
    currenDate.getDate() + 1 // на один день больше
  );
  // делим на тысячу, т.к операции в датами в миллисекундах идут
  return (nextDate - currenDate) / 1000;
};
console.log(getSecondsToTomorrow());
