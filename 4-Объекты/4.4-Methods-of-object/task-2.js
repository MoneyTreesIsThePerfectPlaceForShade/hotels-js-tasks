/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/
// в задании просят, чтоб значения запрашивались,
// это можно сделать так, я сделал чтобы код работал вне браузера
/*
read() {
    this.a = +prompt('a?');
    this.b = +prompt('b?');
  },
*/
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(10, 12);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.a, calculator.b);
