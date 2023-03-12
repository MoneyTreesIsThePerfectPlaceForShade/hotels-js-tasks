// Выведите список потомков в дереве

// РЕШЕНИЕ
let listOfLi = document.querySelectorAll("li");

for (let li of listOfLi) {
  // считаем все li, которые внутри текущего li
  let count = li.querySelectorAll("li").length;
  // если 0, то проходим, не задерживаемся
  if (!count) continue;
  li.firstChild.data += " [" + count + "]";
}
