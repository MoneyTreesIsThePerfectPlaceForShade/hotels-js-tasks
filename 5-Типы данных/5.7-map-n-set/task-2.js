/*
Анаграммы – это слова, у которых те же буквы в том же количестве,
 но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

const aclean = function (words) {
  let map = new Map();

  for (const word of words) {
    // создаем ключи, т.к. анаграммы содержат одинаковые буквы, то и
    // ключи у анаграмм будут одни и те же
    const sortedChars = word.toLowerCase().split("").sort().join("");
    // если (вернее когда) будет повторяющийся ключ,
    // то он просто перезапишет прошлое значение
    map.set(sortedChars, word);
  }
  return Array.from(map.values());
};

let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(words)); // "nap,teachers,ear" или "PAN,cheaters,era"

// код прошел все тесты
