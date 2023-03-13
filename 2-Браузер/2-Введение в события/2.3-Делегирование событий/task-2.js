// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:

// РЕШЕНИЕ
// В CSS делаем элемент bold при наведении, чтобы понимать, что можно кликнуть
const tree = document.querySelector(".tree");

for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener("click", function (event) {
  if (event.target.tagName != "SPAN") {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector("ul");
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
});
