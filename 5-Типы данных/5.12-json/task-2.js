let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    // убираем цикл ссылки с помощью undefined
    return value == meetup && key !== "" ? undefined : value;
    // проверка key нужно из-за того, что *далее цитата из учебника*
    /*Первый вызов – особенный. Ему передаётся специальный «объект-обёртка»: 
    {"": meetup}. Другими словами, первая (key, value) пара имеет пустой ключ, 
    а значением является целевой объект в общем. */
  })
);
