/*
Как найти?…

1) Таблицу с id="age-table".
2) Все элементы label внутри этой таблицы (их три).
3) Первый td в этой таблице (со словом «Age»).
4) Форму form с именем name="search".
5) Первый input в этой форме.
6) Последний input в этой форме.
*/

// 1)
const table = document.getElementById("age-table");
// 2)
table.querySelectorAll("#age-table label");
// 3)
table.querySelector("td");
// 4)
const form = document.querySelector('form[name="search"]');
// 5)
form.querySelector("input");
// 6)
const inputs = form.querySelectorAll("input");
inputs[inputs.length - 1];
