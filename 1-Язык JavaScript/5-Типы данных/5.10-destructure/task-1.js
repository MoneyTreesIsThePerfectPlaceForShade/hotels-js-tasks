/*
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

let user = {
  name: "John",
  years: 30,
};

// years: age - что-то в духе никнейма
// isAdmin = false - значение по умолчанию, если нет такого свойства
const { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);
