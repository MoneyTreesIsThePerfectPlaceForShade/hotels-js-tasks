/*
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
*/

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  // РЕШЕНИЕ
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  // РЕШЕНИЕ
  stomach: [],
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

// ОТВЕТ: в speedy и lazy я прописал каждому свой stomach, т.к. у них не было своего личного желудка, они обращались и работали с желудком hamster, от того и был один общий на двоих
