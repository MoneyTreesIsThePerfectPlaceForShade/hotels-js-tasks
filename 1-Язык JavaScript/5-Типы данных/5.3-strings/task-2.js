/*
Напишите функцию checkSpam(str), возвращающую true, 
если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

// РЕШЕНИЕ

const checkSpam = function (str) {
  str = str.toLowerCase();

  if (str.includes("xxx") || str.includes("viagra")) return true;
  else return false;
};
// в песочнице все тесты пройдены

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
