// Что выведет код ниже?
alert(alert(1) && alert(2)); // вновь, И ищет первое ложное
// alert возвращает undefined, оно является ложным значением

// ОТВЕТ: 1 (т.к отработал alert), потом undefined (т.к. отработал еще один alert
// и вывел первое ложное значение)
