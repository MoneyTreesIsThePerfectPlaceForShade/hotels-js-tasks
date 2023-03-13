// Создайте кнопку, которая будет скрывать себя по нажатию.

// РЕШЕНИЕ
const btn = document.getElementById("hider");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  btn.style.display = "none";
});
