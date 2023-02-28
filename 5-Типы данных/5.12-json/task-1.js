/*
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
*/

let user = {
  name: "Василий Иванович",
  age: 35,
};

// РЕШЕНИЕ
const userJSON = JSON.stringify(user);
console.log(userJSON);
const parsedJSON = JSON.parse(userJSON);
console.log(parsedJSON);
