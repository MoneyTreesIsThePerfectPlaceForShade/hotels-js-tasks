/*
Для страницы:
<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

Напишите код, как получить…
1) элемент <div>?
2) <ul>?
3) второй <li> (с именем Пит)?
*/

//РЕШЕНИЕ
// 1)
document.body.children[0]; // т.к. div - первый элемент в body
// 2)
document.body.children[1]; // т.к. ul - второй элемент в body
// 3)
document.body.children[1].children[1];
