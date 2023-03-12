// Создайте календарь в виде таблицы

// РЕШЕНИЕ
const createCalendar = function (elem, year, month) {
  const currentMonth = month - 1; // т.к.  месяцы идут с нуля
  const currentDate = new Date(year, currentMonth);

  let table = `<table>
    <tr>
    <th>Пн</th>
    <th>Вт</th>
    <th>Ср</th>
    <th>Чт</th>
    <th>Пт</th>
    <th>Сб</th>
    <th>Вс</th>
    </tr><tr>`;

  for (let i = 0; i < getDay(currentDate); i++) {
    table += "<td></td>";
  }

  while (currentDate.getMonth() === currentMonth) {
    table += "<td>" + currentDate.getDate() + "</td>";

    if (getDay(currentDate) % 7 === 6) {
      table += "</tr><tr>";
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (getDay(currentDate) !== 0) {
    for (let i = getDay(currentDate); i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>";

  elem.innerHTML = table;
};

function getDay(date) {
  let day = date.getDay();
  if (day === 0) day = 7;
  return day - 1;
}

createCalendar(calendar, 2012, 9);
