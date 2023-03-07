/*
Встроенный метод Math.random() возвращает случайное 
число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное 
число с плавающей точкой от min до max (но не включая max).
*/

// РЕШЕНИЕ:
// такое уже реализовывал в проекте по игре в кости,
// поэтому труда не составило
// но комментарии оставлю, которые поясняют моё решение
const random = function (min, max) {
  // random возвращает значение от 0 до 1
  // поэтому умножная значение от 0 до 1 на (max-min)
  // мы получаем от 0 до max-min
  // почему до max-min? нас просили не включительно, поэтому от max-min
  // далее прибавляем min, и получаем от min до max-min
  return Math.random() * (max - min) + min;
};

// короткая запись
const randomArrow = (min, max) => Math.random() * (max - min) + min;

console.log(random(1, 10));
console.log(random(1, 10));
console.log(random(1, 10));
console.log(random(1, 10));

console.log(random(1, 10));
console.log(random(1, 10));
console.log(random(1, 10));
console.log(random(1, 10));

console.log(random(1, 10));
console.log(random(1, 10));
console.log(random(1, 10));
console.log(random(1, 10));
