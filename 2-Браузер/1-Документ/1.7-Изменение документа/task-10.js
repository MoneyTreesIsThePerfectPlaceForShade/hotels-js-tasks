// Сортировка таблицы

// РЕШЕНИЕ
const table = document.getElementById("table");
const sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((a, b) => (a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1));

table.tBodies[0].append(...sortedRows);
