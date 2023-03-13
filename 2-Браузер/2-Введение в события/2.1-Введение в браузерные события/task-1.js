// Скрыть элемент по нажатию кнопки

// РЕШЕНИЕ
const elem = document.getElementById("text");
const btn = document.getElementById("hider");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  elem.style.display = "none";
});
