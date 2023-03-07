// Что выведет функция?

function f() {
  alert(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();

// ОТВЕТ: функция выведет null, т.к. мы привязали такой контекст
