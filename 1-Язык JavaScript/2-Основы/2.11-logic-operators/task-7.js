/*
Напишите условие if для проверки, 
что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, 
второй – без этого оператора.
*/

let age = 11;
// Вариант 1, без оператора НЕ
if (age < 14 || age > 90) console.log("Вам либо меньше 14, либо больше 90");
else console.log("Вам от 14 до 90 лет");

// Вариант 2, с оператором НЕ
if (!(age >= 14 && age <= 90))
  console.log("Вам либо меньше 14, либо больше 90");
else console.log("Вам от 14 до 90 лет");
