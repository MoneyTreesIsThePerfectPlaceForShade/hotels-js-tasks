/*
Напишите функцию camelize(str), 
которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, 
чтобы разбить строку на массив символов, 
потом переделайте всё как нужно и методом join соедините обратно.
 */

// РЕШЕНИЕ

const camelize = function (str) {
  // проверка на пустую строку
  if (str.length === 0) return "";

  let words = str.split("-");

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join("");
};

console.log(camelize("background-color"));
console.log(camelize("-webkit-transition"));

// код прошел все тесты в песочнице
