// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// РЕШЕНИЕ
const getWeekDay = function (date) {
  const day = date.getDay();
  let weekday = "";
  if (day === 0) weekday = "ВС";
  if (day === 1) weekday = "ПН";
  if (day === 2) weekday = "ВТ";
  if (day === 3) weekday = "СР";
  if (day === 4) weekday = "ЧТ";
  if (day === 5) weekday = "ПТ";
  if (day === 6) weekday = "СБ";
  return weekday;
};

let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date)); // нужно вывести "ВТ"

// код прошел все тесты
