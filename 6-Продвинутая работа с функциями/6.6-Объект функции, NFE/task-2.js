/*
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/

// РЕШЕНИЕ
const sum = function (a) {
  let curSum = a;

  const funSum = function (b) {
    curSum += b;
    return funSum;
  };

  funSum.toString = function () {
    return curSum;
  };

  return funSum;
};

console.log(sum(1)(2).toString());
console.log(sum(1)(2)(2)(4).toString());
console.log(sum(1)(2)(2)(4)(2)(5).toString());
