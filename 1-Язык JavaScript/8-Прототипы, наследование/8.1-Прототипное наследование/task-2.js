/*
1) С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
2) Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
*/

// РЕШЕНИЕ первого задания
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
console.log(pockets.pen, bed.glasses);

// ОТВЕТ на второе задание: быстрее, конечно же, получить значение через head.glasses, т.к. это свойство самого объекта, а не наследуемое.
// Если бы мы получали значение через pockets, то нам бы пришлось пройтись от pockets до bed, от bed то table, от table до head.
// Но в ответе было написанно, что движки оптимизируют это дело и нам не важно откуда его получать.
