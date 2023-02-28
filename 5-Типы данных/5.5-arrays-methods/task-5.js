/*
У нас есть массив строк arr. Нужно получить отсортированную копию, 
но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/

const copySorted = function (arr) {
  const result = arr.slice(0);
  return result.sort();
};
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted); // CSS, HTML, JavaScript
