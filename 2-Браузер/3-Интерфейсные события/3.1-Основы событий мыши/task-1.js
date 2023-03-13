// Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.

// РЕШЕНИЕ
const list = document.querySelector("#ul");
const item = list.querySelectorAll("li");

list.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

list.addEventListener("click", function (e) {
  const el = e.target.closest("li");
  if (!el) return;

  if (e.ctrlKey || e.metaKey) {
    el.classList.toggle("selected");
  } else {
    [...item].forEach((el) => {
      el.classList.remove("selected");
    });
  }
  el.classList.add("selected");
});
