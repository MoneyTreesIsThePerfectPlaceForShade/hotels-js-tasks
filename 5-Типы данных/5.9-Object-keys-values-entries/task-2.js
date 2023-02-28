/*
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/

// РЕШЕНИЕ
const count = function (obj) {
  return Object.keys(obj).length;
};

let user = {
  name: "John",
  age: 30,
};

console.log(count(user)); // 2

// код прошел все тесты
