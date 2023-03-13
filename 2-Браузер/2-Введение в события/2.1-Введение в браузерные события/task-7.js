// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// РЕШЕНИЕ
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

const width = 130;
const count = 3;

const list = carousel.querySelector("ul");
const li = carousel.querySelectorAll("li");

let position = 0;

const prev = carousel.querySelector(".prev");
const next = carousel.querySelector(".next");

prev.addEventListener("click", function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
});

next.addEventListener("click", function () {
  position -= width * count;
  position = Math.max(position, -width * (li.length - count));
  list.style.marginLeft = position + "px";
});
