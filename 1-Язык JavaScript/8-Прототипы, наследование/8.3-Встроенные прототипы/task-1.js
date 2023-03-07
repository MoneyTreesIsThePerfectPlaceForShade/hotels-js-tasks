// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// РЕШЕНИЕ
// всё работает, но думаю можно и без return обойтись
Function.prototype.defer = function (ms) {
  return setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
