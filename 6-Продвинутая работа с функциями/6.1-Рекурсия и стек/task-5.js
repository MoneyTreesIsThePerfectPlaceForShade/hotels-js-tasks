/*
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// РЕШЕНИЕ
// 1) Цикл
const printListCycleReverse = function (list) {
  let listCopy = list;
  const result = [];

  while (listCopy) {
    result.push(listCopy.value);
    listCopy = listCopy.next;
  }

  // я сначала думал, что схитрил такой схемой, но проверяя себя, увидел, что это вполне себе "легальный" способ решение задачи
  result.reverse().forEach((elem) => console.log(elem));
};

// 2) Рекурсия
const printListRecReverse = function (list) {
  if (list.next) {
    printListRecReverse(list.next);
  }
  console.log(list.value);
};

console.log("---ЦИКЛ---");
printListCycleReverse(list);
console.log("---РЕКУРСИЯ---");
printListRecReverse(list);

// В данном случае с рекурсией намного проще выходит
