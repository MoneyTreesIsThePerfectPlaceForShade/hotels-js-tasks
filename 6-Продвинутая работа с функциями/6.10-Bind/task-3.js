// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test); // что выведет? почему?

// ОТВЕТ: выведет undefined, т.к. при bind создается новый объект, а функция тоже объект. У новой ф-ии не будет свойства test, поэтому undefined
