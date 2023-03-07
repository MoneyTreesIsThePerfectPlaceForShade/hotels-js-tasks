/*
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа 
и элементами массива в качестве значений.
*/

// РЕШЕНИЕ
const groupById = function (arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    const id = user.id;
    result[id] = arr[i];
  }

  return result;
};

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);

// код прошел все тесты в песочнице
