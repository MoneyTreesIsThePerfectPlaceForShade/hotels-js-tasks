// Напишите функцию getAverageAge(users),
// которая принимает массив объектов со свойством age и возвращает средний возраст.

// РЕШЕНИЕ
const getAverageAge = function (arrOfObj) {
  const totalAge = arrOfObj.reduce(
    (totalAge, currentUser) => (totalAge += currentUser.age),
    0
  );
  return totalAge / arrOfObj.length;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));
