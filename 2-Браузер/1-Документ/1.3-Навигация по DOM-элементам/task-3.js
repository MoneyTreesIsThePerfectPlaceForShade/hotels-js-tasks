// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

let table = document.body.firstElementChild;

// РЕШЕНИЕ
for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  row.cells[i].style.backgroundColor = "red"; // каждый раз будем получать строку i и ячейку i, так и выделим всё по диагонали. 0-0 1-1 2-2 ... n-n
}
