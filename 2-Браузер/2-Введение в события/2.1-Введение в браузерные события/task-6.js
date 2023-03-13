// Добавить кнопку закрытия

// РЕШЕНИЕ

// нужно отредактировать CSS, добавив .pane - position:relative,
// а .remove-button - position:absolute и top:0;
const panes = document.querySelectorAll(".pane");

for (let pane of panes) {
  pane.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
  pane.firstChild.addEventListener("click", function () {
    pane.remove();
  });
}
