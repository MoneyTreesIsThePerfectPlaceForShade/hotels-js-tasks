/*
Давайте произведём 5 операций с массивом.

1) Создайте массив styles с элементами «Джаз» и «Блюз».
2) Добавьте «Рок-н-ролл» в конец.
3) Замените значение в середине на «Классика».
Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
4) Удалите первый элемент массива и покажите его.
5) Вставьте Рэп и Регги в начало массива.
*/

//1
const styles = ["Джаз", "Блюз"];
// console.log(styles);
//2
styles.push("Рок-н-ролл");
// console.log(styles);
//3
styles[Math.floor(styles.length - 1) / 2] = "Классика";
// console.log(styles);
//4
const firstElem = styles.shift();
console.log(firstElem);
// console.log(styles);
//5
styles.unshift("Рэп", "Регги");
// console.log(styles);
