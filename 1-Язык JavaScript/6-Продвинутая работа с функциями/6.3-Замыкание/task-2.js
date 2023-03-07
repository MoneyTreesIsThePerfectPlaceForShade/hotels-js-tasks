/*
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?
*/

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // ?
console.log(counter.up()); // ?
console.log(counter.down()); // ?

// ОТВЕТ: выведет 1 2 1
// работает, потому что функции записанны через ключевое слово this
// это слово отсылает к контексту, а контекст - это функция Counter,
// в которой есть переменная count.
