/*
Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
*/

// РЕШЕНИЕ

const factorial = function (n) {
  if (n === 1) return n;
  else return n * factorial(n - 1);
};

console.log(factorial(5)); // 120
