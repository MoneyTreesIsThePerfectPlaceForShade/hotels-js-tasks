// Напишите функцию printList(list), которая выводит элементы списка по одному.

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

// 1) Через цикл
const printListCycle = function (list) {
  let listCopy = list;

  while (listCopy) {
    console.log(listCopy.value);
    listCopy = listCopy.next;
  }
};

// 2) Через рекурсию
const printListRec = function (list) {
  console.log(list.value);
  if (list.next) {
    printListRec(list.next);
  }
};

console.log("---ЦИКЛ---");
printListCycle(list);
console.log("---РЕКУРСИЯ---");
console.log(printListRec(list));

// Отвечая на вопрос "как лучше" я бы ответил, что производительности лучше с циклом и лично мне удобнее, когда используется цикл, а не рекурсия, именно в данном случае.
