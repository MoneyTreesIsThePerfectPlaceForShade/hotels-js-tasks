// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

// РЕШЕНИЕ
function makeArmy() {
  // let i = 0;
  // while (i < 10) {
  //   let shooter = function () {
  //     console.log(i);
  //   };
  //   shooters.push(shooter);
  //   i++;
  // }

  // WHILE ИЗМЕНИЛ НА FOR, т.к. в for на каждой итерации свой контекст создается, а в while такого нет
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

// мы исполняем в данном случае console.log(i);, while брал последнее значение i, то есть 10, а при for берется именно то значение i, которое было в контексте на момент итерации
army[0]();
army[5]();

// тесты пройдены
