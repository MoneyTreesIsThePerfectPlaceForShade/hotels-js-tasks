// Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.

const isEmpty = function (obj) {
  // достаем ключи из массива и преобразуем в массив
  const check = Object.keys(obj);
  // если длина массива равна нулю - значит ключей нет
  // ключей нет - объект пустой
  if (check.length === 0) return true;
  else return false;
};

const userEmpty = {};

const userFull = {
  name: "Walter",
  lastName: "White",
};

console.log(isEmpty(userEmpty));
console.log(isEmpty(userFull));
