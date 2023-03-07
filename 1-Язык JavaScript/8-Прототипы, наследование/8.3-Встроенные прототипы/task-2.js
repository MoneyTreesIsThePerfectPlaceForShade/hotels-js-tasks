// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// РЕШЕНИЕ
Function.prototype.defer = function (ms) {
  return (...args) => {
    setTimeout(this, ms, ...args); // т.к. setTimeout после ф-ии и задержки может принимать параметры
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(12, 2);
