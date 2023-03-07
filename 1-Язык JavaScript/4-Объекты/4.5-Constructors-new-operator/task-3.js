/*
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
*/

const Accumulator = function (startingValue) {
  this.value = startingValue;

  this.read = function () {
    const inputedValue = +prompt("Введите число", "");
    this.value += inputedValue;
    return this;
  };
};

// Прошел все тесты в песочнице
