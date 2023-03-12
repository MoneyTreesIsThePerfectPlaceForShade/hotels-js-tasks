// Напишите интерфейс для создания списка.

// РЕШЕНИЕ
// создаем список
const ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  const data = prompt("Введите текст", "");

  // если пустая строка или прожат esc - прерываем цикл
  if (!data) {
    break;
  }

  // создаем элемент списка
  const li = document.createElement("li");
  li.textContent = data;
  ul.append(li);
}
