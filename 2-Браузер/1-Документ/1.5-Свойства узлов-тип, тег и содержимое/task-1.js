/*
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
*/

// РЕШЕНИЕ
for (const li of document.querySelectorAll("li")) {
  const animal = li.firstChild.data;
  const quantity = li.querySelectorAll("li").length;

  alert(animal + ": " + quantity);
}

// код отработал как в демо
