/*
Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
*/

// ОТВЕТ: свойство full получит объект rabbit.
// Так как вызываем мы на rabbit, а this указывает всегда на текущий объект.
