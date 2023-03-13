// Спрячьте сообщения с помощью делегирования

// РЕШЕНИЕ
const container = document.querySelector("#container");
container.addEventListener("click", function (e) {
  if (e.target.className !== "remove-button") return;

  const pane = e.target.closest(".pane");
  pane.remove();
});
