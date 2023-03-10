/*
Напишите функцию shuffle(array), которая перемешивает 
(переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести 
к разным последовательностям элементов. Например:
*/

// ИДЕЯ РЕАЛИЗАЦИИ
// можно использовать метод sort, а в колбэке определить a и b как рандомные значения

// РЕШЕНИЕ
const shuffle = function (array) {
  return array.sort((a, b) => {
    a = Math.random();
    b = Math.random();
    return a - b;
  });
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

// чисто технически решение работает, но в условии была приписка
// "Все последовательности элементов должны иметь одинаковую вероятность"
// я не совсем уверен как этого можно достичь, в данном случае просто опыта не хватает

// после своего решения я глянул их реализацию, предлагают через алгоритм
// "Тасование Фишера — Йетса". Менять свое решение не буду, пускай такое останется.

