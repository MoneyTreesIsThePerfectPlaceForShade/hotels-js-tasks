/*
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), 
которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
*/

// РЕШЕНИЕ
const topSalary = function (salaries) {
  // если объект пуст - возвращаем null
  if ([...Object.values(salaries)].length === 0) return null;

  // поиск макс значения
  const maxSalary = Math.max(...Object.values(salaries));
  // находим индекс сотрудника с наибольшим значением
  const indexTop = [...Object.values(salaries)].findIndex(
    (elem) => elem === maxSalary
  );
  // возвращаем этого сотрудника
  return [...Object.keys(salaries)].find((pred, index) => {
    if (index === indexTop) {
      return pred;
    }
  });
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));

// код прошел все тесты
