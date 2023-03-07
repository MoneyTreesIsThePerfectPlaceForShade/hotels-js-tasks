// Перепишите if..else с использованием нескольких операторов '?'.
let messageOld;

if (login == "Сотрудник") {
  messageOld = "Привет";
} else if (login == "Директор") {
  messageOld = "Здравствуйте";
} else if (login == "") {
  messageOld = "Нет логина";
} else {
  messageOld = "";
}

// решение
let message =
  login === "Сотрудник"
    ? "Привет"
    : login === "Директор"
    ? "Здравствуйте"
    : login === ""
    ? "Нет логина"
    : "";
