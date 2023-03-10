// Посмотрите на код. Какой будет результат у вызова на последней строке?
"use strict";
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();

// ОТВЕТ: будет ошибка, поскольку if создает свой контекст, и мы просто не можем достуачаться до функции sayHi(). Важное замечаение, ошибка будет только в strict режиме
// без него код сработает как и хотелось бы, выведет "Hello, John"
