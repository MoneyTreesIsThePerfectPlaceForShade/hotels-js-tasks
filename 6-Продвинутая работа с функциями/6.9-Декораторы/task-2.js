// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

// РЕШЕНИЕ

function delay(func, delay) {
  return function () {
    setTimeout(() => func.apply(this, arguments), delay);
  };
}

let message = delay(console.log, 3 * 1000);

message("Вывод сообщения");
